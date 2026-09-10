import type { SVGProps, ReactNode } from "react"

// ROCKSOUL asset geometry plus minimal navigation glyphs using the same 24px / 1.75 stroke contract.
function icon(body: ReactNode) {
  return function Icon(props: SVGProps<SVGSVGElement>) {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{body}</svg>
  }
}
export const ChevronDownIcon = icon(<><path d="m6 9 6 6 6-6" /></>)
export const ChevronUpIcon = icon(<><path d="m6 15 6-6 6 6" /></>)
export const ChevronLeftIcon = icon(<><path d="m15 6-6 6 6 6" /></>)
export const ChevronRightIcon = icon(<><path d="m9 6 6 6-6 6" /></>)
export const XIcon = icon(<><path d="m6 6 12 12M18 6 6 18" /></>)
export const MinusIcon = icon(<><path d="M5 12h14" /></>)
export const CircleIcon = icon(<><circle cx="12" cy="12" r="4" /></>)
export const ArrowLeft = icon(<><path d="M20 12H4m6-6-6 6 6 6" /></>)
export const ArrowRight = icon(<><path d="M4 12h16m-6-6 6 6-6 6" /></>)
export const ArrowDownIcon = icon(<><path d="M12 4v16m-6-6 6 6 6-6" /></>)
export const MoreHorizontalIcon = icon(<><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>)
export const PanelLeftIcon = icon(<><rect x="3" y="3" width="18" height="18" /><path d="M9 3v18" /></>)
export const GripVerticalIcon = icon(<><path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01" /></>)
export const CheckIcon = icon(<><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>)
export const CircleCheckIcon = CheckIcon
export const InfoIcon = icon(<><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/></>)
export const Loader2Icon = icon(<><circle cx="12" cy="12" r="8" strokeDasharray="3 3"/></>)
export const OctagonXIcon = icon(<><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/></>)
export const TriangleAlertIcon = icon(<><path d="M12 3 2 21h20Z"/><path d="M12 9v5m0 3h.01"/></>)
export const SearchIcon = icon(<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>)
export { ChevronRightIcon as ChevronRight, MoreHorizontalIcon as MoreHorizontal }
