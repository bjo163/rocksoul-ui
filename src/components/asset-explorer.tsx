import { useMemo, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { MoonWitnessResilientImage } from "./asset-provider"
import {
  MOONWITNESS_STABLE_REPOSITORY_BASE,
  ROCKSOUL_ASSETS_REGISTRY,
  moonWitnessAssets,
  resolveMoonWitnessRegistryAssetUrl,
  type MoonWitnessAssetRegistryPackId,
} from "../contracts/assets-registry"

const categories = {
  Core: ["product-icons","dashboard","data-viz","hero-backgrounds","state-illustrations","motion","sfx","graph-vector","badge-status","source-file"],
  Investigation: ["geospatial","evidence-media","correlation-semantics","privacy-redaction","evidence-integrity","export-seal","jurisdiction-locale"],
  Workflow: ["kanban-workflow","calendar-temporal","chat-collaboration","ai-workspace","authorization-security","data-grid","form-controls","command-keyboard","community-participation"],
  Identity: ["persona-avatar","rocksoul-character","theme-accessibility","cursor-interaction"],
  Media: ["social-campaign","platform-delivery","onboarding","document-report","notification","editorial","cinematic-hero","texture-material","device-mockup"],
  System: ["architecture-diagram","runtime-motion","developer-distribution"],
} as const

type Category = "All" | keyof typeof categories
type RegistryPack = { manifest: string; count: number; svg?: Record<string,string>; png?: Record<string,unknown> }

function categoryOf(id: string): keyof typeof categories {
  return (Object.entries(categories).find(([,ids]) => (ids as readonly string[]).includes(id))?.[0] ?? "System") as keyof typeof categories
}
function prettify(value: string) {
  return value.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}

export function AssetExplorer({
  baseUrl = MOONWITNESS_STABLE_REPOSITORY_BASE,
  initialCategory = "All",
  limit,
  compact = false,
}: {
  baseUrl?: string
  initialCategory?: Category
  limit?: number
  compact?: boolean
}) {
  const [category,setCategory]=useState<Category>(initialCategory)
  const [query,setQuery]=useState("")
  const [selected,setSelected]=useState<MoonWitnessAssetRegistryPackId | null>(null)
  const [assetQuery,setAssetQuery]=useState("")
  const [view,setView]=useState<"grid"|"compact">(compact ? "compact" : "grid")

  const entries=useMemo(() => {
    const q=query.trim().toLowerCase()
    const filtered=(Object.entries(moonWitnessAssets.packs) as Array<[MoonWitnessAssetRegistryPackId,RegistryPack]>)
      .filter(([id,pack]) => {
        if(category!=="All" && categoryOf(id)!==category) return false
        if(!q) return true
        return [id,categoryOf(id),...Object.keys(pack.svg ?? {}),...Object.keys(pack.png ?? {})].join(" ").toLowerCase().includes(q)
      })
    return typeof limit==="number" ? filtered.slice(0,limit) : filtered
  },[category,limit,query])

  const selectedPack=selected ? moonWitnessAssets.packs[selected] as unknown as RegistryPack : null
  const selectedAssets=selectedPack
    ? Object.entries(selectedPack.svg ?? {}).filter(([name])=>name.toLowerCase().includes(assetQuery.trim().toLowerCase()))
    : []

  return (
    <section aria-label="MoonWitness asset explorer">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mw-eyebrow text-primary">Asset explorer / v{moonWitnessAssets.version}</p>
          <h2 className="mt-2 text-2xl font-bold">{ROCKSOUL_ASSETS_REGISTRY.packCount} packs / {ROCKSOUL_ASSETS_REGISTRY.canonicalAssetCount} canonical assets</h2>
        </div>
        <div className="flex gap-2" aria-label="Asset explorer view">
          <Button variant={view==="grid"?"default":"secondary"} onClick={()=>setView("grid")}>Grid</Button>
          <Button variant={view==="compact"?"default":"secondary"} onClick={()=>setView("compact")}>Compact</Button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto]">
        <label className="grid gap-2 text-sm font-medium">
          <span className="sr-only">Search asset packs</span>
          <Input
            value={query}
            onChange={(event)=>setQuery(event.target.value)}
            placeholder="Search packs or asset names…"
            className="min-h-11 border border-border bg-card px-3 text-foreground outline-none focus:border-primary"
          />
        </label>
        <div className="flex flex-wrap gap-2" aria-label="Asset categories">
          {(["All",...Object.keys(categories)] as Category[]).map((item)=>(
            <Button
              key={item}
              type="button"
              onClick={()=>setCategory(item)}
              aria-pressed={category===item}
              className={`min-h-11 border px-3 text-xs font-bold uppercase tracking-wide ${category===item?"border-primary bg-primary/10 text-primary":"border-border bg-card text-muted-foreground hover:text-foreground"}`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <p className="mw-meta mt-4 text-muted-foreground">{entries.length} pack families shown</p>
      <div className={`mt-4 grid gap-3 ${view==="grid"?"sm:grid-cols-2 xl:grid-cols-3":"grid-cols-1"}`}>
        {entries.map(([id,pack])=>{
          const previews=Object.entries(pack.svg ?? {}).slice(0,view==="grid"?3:1)
          return (
            <Button
              key={id}
              type="button"
              onClick={()=>{setSelected(id);setAssetQuery("")}}
              className={`border border-border bg-card text-left transition hover:border-border-strong focus-visible:outline-2 focus-visible:outline-primary ${view==="grid"?"p-4":"grid min-h-20 grid-cols-[88px_1fr_auto] items-center gap-4 p-3"}`}
            >
              <span className={`flex items-center justify-center overflow-hidden bg-panel ${view==="grid"?"min-h-36":"h-14"}`}>
                {previews.length ? previews.map(([assetId])=>{
                  const src=resolveMoonWitnessRegistryAssetUrl(id,assetId,{baseUrl})
                  const localSrc=resolveMoonWitnessRegistryAssetUrl(id,assetId,{baseUrl:"/assets"})
                  return src?<MoonWitnessResilientImage key={assetId} src={src} fallbackSrc={localSrc} alt="" loading="lazy" className="max-h-24 max-w-[30%] object-contain" />:null
                }) : <span className="mw-meta text-muted-foreground">{id==="sfx"?"∿":"{ }"}</span>}
              </span>
              <span className={view==="grid"?"mt-4 block":""}>
                <span className="mw-meta text-primary">{categoryOf(id)}</span>
                <strong className="mt-1 block text-base">{prettify(id)}</strong>
              </span>
              <span className="mw-meta text-muted-foreground">{pack.count}</span>
            </Button>
          )
        })}
      </div>

      {entries.length===0 ? (
        <div className="mt-5 border border-dashed border-border p-8 text-center">
          <strong>No asset packs found.</strong>
          <p className="mt-2 text-sm text-muted-foreground">Clear the search or choose another category.</p>
        </div>
      ) : null}

      <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelected(null) }}>
        <DialogContent className="bg-card p-0 text-foreground sm:max-w-[960px]" aria-describedby={undefined}>
          <DialogHeader className="border-b border-border p-4"><DialogTitle>{selected ? prettify(selected) : "Asset pack"}</DialogTitle></DialogHeader>
          <div className="p-5">
        {selected && selectedPack ? (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <p className="mw-meta text-primary">{categoryOf(selected)} / {selectedPack.count} canonical assets</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{selectedPack.manifest}</p>
              </div>
              <a
                href={`${baseUrl.replace(/\/+$/,"")}/${selectedPack.manifest}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center border border-border px-3 text-xs font-bold uppercase hover:border-primary"
              >
                Open manifest ↗
              </a>
            </div>
            <label className="mt-4 grid gap-2">
              <span className="mw-meta text-muted-foreground">Filter assets</span>
              <Input
                value={assetQuery}
                onChange={(event)=>setAssetQuery(event.target.value)}
                placeholder="Search inside this pack…"
                className="min-h-11 border border-border bg-background px-3 text-foreground outline-none focus:border-primary"
              />
            </label>
            <div className="mt-4 max-h-[55vh] overflow-auto border border-border">
              {selectedAssets.map(([assetId,path])=>{
                const src=resolveMoonWitnessRegistryAssetUrl(selected,assetId,{baseUrl})
                const localSrc=resolveMoonWitnessRegistryAssetUrl(selected,assetId,{baseUrl:"/assets"})
                return (
                  <div key={assetId} className="grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-3 last:border-b-0">
                    <span className="flex h-12 items-center justify-center bg-panel">
                      {src?<MoonWitnessResilientImage src={src} fallbackSrc={localSrc} alt="" loading="lazy" className="max-h-10 max-w-10" />:null}
                    </span>
                    <span className="min-w-0">
                      <strong className="block text-sm">{prettify(assetId)}</strong>
                      <span className="block truncate font-mono text-[10px] text-muted-foreground">{path}</span>
                    </span>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        className="min-h-11 border border-border px-3 text-xs font-bold"
                        onClick={()=>void navigator.clipboard?.writeText(path)}
                      >
                        Copy
                      </Button>
                      {src?<a className="grid min-h-11 place-items-center border border-border px-3 text-xs font-bold" href={src} target="_blank" rel="noreferrer">Open ↗</a>:null}
                    </div>
                  </div>
                )
              })}
              {selectedAssets.length===0 ? <p className="p-5 text-sm text-muted-foreground">No SVG assets match this filter.</p> : null}
            </div>
          </div>
        ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
