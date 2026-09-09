import { useEffect, useState, type HTMLAttributes } from "react"
import { MoonWitnessResilientImage } from "./asset-provider"

export const moonWitnessRuntimeMotionIds = [
  "pulse-alert","evidence-linked","case-resolved","ai-orbit","loading-trace","notification-in",
  "drawer-open","sync-spin","focus-ring","upload-rise","graph-connect","backend-reconnect",
] as const

export type MoonWitnessRuntimeMotionId = typeof moonWitnessRuntimeMotionIds[number]
export type MoonWitnessRuntimeMotionFormat = "svg" | "apng" | "webm" | "lottie"

const DEFAULT_RUNTIME_BASE="/assets/runtime-motion-pack"

export function resolveMoonWitnessRuntimeMotion(
  id: MoonWitnessRuntimeMotionId,
  format: MoonWitnessRuntimeMotionFormat,
  baseUrl=DEFAULT_RUNTIME_BASE,
) {
  const base=baseUrl.replace(/\/+$/,"")
  if(format==="apng") return `${base}/png/${id}.png`
  if(format==="lottie") return `${base}/lottie/${id}.json`
  return `${base}/${format}/${id}.${format}`
}

export function usePrefersReducedMotion() {
  const [reduced,setReduced]=useState(false)
  useEffect(()=>{
    if(typeof window==="undefined"||!window.matchMedia) return
    const media=window.matchMedia("(prefers-reduced-motion: reduce)")
    const update=()=>setReduced(media.matches)
    update()
    media.addEventListener?.("change",update)
    return ()=>media.removeEventListener?.("change",update)
  },[])
  return reduced
}

export function MoonWitnessRuntimeMotion({
  id,
  format="webm",
  alt,
  baseUrl=DEFAULT_RUNTIME_BASE,
  className,
  reducedMotionFallback,
  ...props
}: Omit<HTMLAttributes<HTMLElement>,"children"> & {
  id: MoonWitnessRuntimeMotionId
  format?: Exclude<MoonWitnessRuntimeMotionFormat,"lottie">
  alt: string
  baseUrl?: string
  reducedMotionFallback?: React.ReactNode
}) {
  const reduced=usePrefersReducedMotion()
  const [videoFailed, setVideoFailed] = useState(false)
  if(reduced){
    return (
      <span className={className} role="img" aria-label={alt} data-reduced-motion="true" {...props}>
        {reducedMotionFallback ?? <span className="mw-meta text-muted-foreground">{alt}</span>}
      </span>
    )
  }
  const src=resolveMoonWitnessRuntimeMotion(id,format,baseUrl)
  const fallbackSrc=resolveMoonWitnessRuntimeMotion(id,"svg",DEFAULT_RUNTIME_BASE)
  if(format==="webm"){
    if (videoFailed) return <MoonWitnessResilientImage className={className} src={fallbackSrc} alt={alt} {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
    return (
      <video
        className={className}
        src={src}
        aria-label={alt}
        autoPlay
        loop
        muted
        playsInline
        onError={() => setVideoFailed(true)}
        {...(props as React.VideoHTMLAttributes<HTMLVideoElement>)}
      />
    )
  }
  return <MoonWitnessResilientImage className={className} src={src} fallbackSrc={fallbackSrc} alt={alt} {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
}
