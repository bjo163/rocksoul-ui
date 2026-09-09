import { useId, type CSSProperties, type ReactNode } from "react"
import { cinematicWebHeroAssets, type CinematicWebHeroAssetSet } from "../contracts/cinematic-web-hero"
import { MoonWitnessResilientImage } from "./asset-provider"

export interface CinematicWebHeroEvidenceItem {
  id: "STORY" | "EVENT" | "PERSON" | "RGBL"
  marker: string
}

export interface CinematicWebHeroArchiveItem {
  label: string
  code: string
  src: string
}

export interface CinematicWebHeroProps {
  assets?: CinematicWebHeroAssetSet
  eyebrow?: ReactNode
  title?: readonly [string, string]
  intro?: ReactNode
  action?: ReactNode
  caseIndex?: ReactNode
  evidence?: readonly CinematicWebHeroEvidenceItem[]
  archive?: readonly CinematicWebHeroArchiveItem[]
  coordinates?: readonly [string, string]
  witnessCaption?: ReactNode
  footerCenter?: ReactNode
  footerRight?: ReactNode
  footerMark?: ReactNode
  id?: string
  archiveId?: string
  className?: string
}

const defaultEvidence: readonly CinematicWebHeroEvidenceItem[] = [
  { id: "STORY", marker: "▤" },
  { id: "EVENT", marker: "✦" },
  { id: "PERSON", marker: "♙" },
  { id: "RGBL", marker: "↗" },
]

function localMirrorUrl(source: string) {
  const marker = "/moonwitness/"
  const index = source.indexOf(marker)
  return index >= 0 ? `/assets${source.slice(index)}` : undefined
}

export function CinematicWebHero({
  assets = cinematicWebHeroAssets,
  eyebrow = <>REAL STORIES.<br />PERSISTENT TRACES.<br />A WIDER TOMORROW.</>,
  title = ["WHERE MYTH", "FADES TO LEGEND"],
  intro = (
    <>
      <p>Some stories sound impossible.<br />Some sound way too familiar.<br />The weird part? Sometimes the traces keep coming back.</p>
      <p>MoonWitness follows what remains.<br />No hype. No forced conclusion.<br />Just records, connections, and whatever survives the cross-check.</p>
    </>
  ),
  action = <a className="mw-cinematic-web-hero__cta" href="#case">ENTER THE CASE <span aria-hidden="true">→</span></a>,
  caseIndex = <>MW / ARCHIVE / CASE 0001 — ∞</>,
  evidence = defaultEvidence,
  archive,
  coordinates = ["35.6762° N", "139.6503° E"],
  witnessCaption = <>ROCKSOUL —<br />THE WITNESS IN MOTION</>,
  footerCenter = <>CATALOGING THE UNEXPLAINED SINCE NOW</>,
  footerRight = <>A MORE CURIOUS TOMORROW</>,
  footerMark = <b aria-hidden="true">◕◕◯</b>,
  id,
  archiveId,
  className = "",
}: CinematicWebHeroProps) {
  const generatedTitleId = useId()
  const titleId = `${generatedTitleId}-cinematic-title`
  const archiveItems = archive ?? [
    { label: "TRACES DON'T LIE.", code: "KODAK 400TX", src: assets.archive[0] },
    { label: "STILL HERE.", code: "36 / 36A", src: assets.archive[1] },
    { label: "PEOPLE. PLACES. PATTERNS.", code: "SOURCE / 04", src: assets.archive[2] },
    { label: "A CLEARER TOMORROW.", code: "CORR / 11", src: assets.archive[3] },
  ]
  const overlayStyle = {
    "--mw-hero-grid": `url("${assets.grid}")`,
    "--mw-hero-grain": `url("${assets.grain}")`,
    "--mw-hero-scanlines": `url("${assets.scanlines}")`,
  } as CSSProperties

  return (
    <section id={id} className={`mw-cinematic-web-hero ${className}`.trim()} style={overlayStyle} aria-labelledby={titleId}>
      <picture className="mw-cinematic-web-hero__master" aria-hidden="true">
        <source media="(max-width: 700px)" srcSet={assets.mobile} />
        <MoonWitnessResilientImage
          src={assets.desktop}
          fallbackSrc={localMirrorUrl(assets.desktop)}
          alt=""
          width={2880}
          height={1620}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
      <div className="mw-cinematic-web-hero__grid" aria-hidden="true" />
      <div className="mw-cinematic-web-hero__texture" aria-hidden="true" />

      <div className="mw-cinematic-web-hero__content">
        <div className="mw-cinematic-web-hero__eyebrow"><i aria-hidden="true" />{eyebrow}</div>
        <h1 id={titleId}>
          <span>{title[0]}</span>
          <span>{title[1]}</span>
        </h1>
        <div className="mw-cinematic-web-hero__intro">{intro}</div>
        <div className="mw-cinematic-web-hero__actions">
          {action}
          <span className="mw-cinematic-web-hero__case-index">{caseIndex}</span>
        </div>
      </div>

      <div className="mw-cinematic-web-hero__evidence" role="group" aria-label="Cross-domain evidence map">
        <span className="mw-cinematic-web-hero__note mw-cinematic-web-hero__note--sky">SAME SKY.<br />DIFFERENT QUESTIONS.</span>
        <svg viewBox="0 0 360 360" aria-hidden="true">
          <path d="M180 44 315 180 180 316 44 180Z" />
          <path d="M180 44V316M44 180H315" />
          <circle cx="180" cy="180" r="3" />
        </svg>
        {evidence.map((item, index) => (
          <span key={item.id} className={`mw-cinematic-web-hero__node mw-cinematic-web-hero__node--${index + 1}`}>
            <b aria-hidden="true">{item.marker}</b>
            {item.id}
          </span>
        ))}
        <span className="sr-only">Evidence graph connects STORY, EVENT, PERSON, and RGBL for investigation. A visible connection is not a claim of causation.</span>
        <span className="mw-cinematic-web-hero__note mw-cinematic-web-hero__note--trace">TRACES CONNECT.<br />PEOPLE. PLACES.<br />PATTERNS REPEAT.</span>
      </div>

      <aside className="mw-cinematic-web-hero__witness">
        <i aria-hidden="true" />
        <strong>{witnessCaption}</strong>
        <hr />
        SOMEWHERE<br />BETWEEN HERE<br />AND ELSEWHERE.
      </aside>

      <aside className="mw-cinematic-web-hero__coordinates">
        {coordinates[0]}<br />{coordinates[1]}
        <hr />
        SAME PLANET.<br />MORE TO SEE.
      </aside>

      <div id={archiveId} className="mw-cinematic-web-hero__archive" aria-label="Archive contact sheet" tabIndex={0}>
        {archiveItems.map((item) => (
          <figure key={item.code}>
            <MoonWitnessResilientImage src={item.src} fallbackSrc={localMirrorUrl(item.src)} alt="" aria-hidden="true" loading="lazy" />
            <figcaption>{item.label}</figcaption>
            <small>{item.code}</small>
          </figure>
        ))}
      </div>

      <footer className="mw-cinematic-web-hero__footer">
        <span><i aria-hidden="true" />01 / INDEPENDENT OBSERVATORY</span>
        <span>{footerCenter}</span>
        <span>{footerRight} {footerMark}</span>
      </footer>
    </section>
  )
}
