import {
  createContext,
  useContext,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react"

export interface NavigationLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string
}

export interface NavigationAdapter {
  navigate?: (href: string) => void
  renderLink?: (props: NavigationLinkProps) => ReactNode
}

const NavigationContext = createContext<NavigationAdapter>({})

export function NavigationProvider({ adapter, children }: { adapter?: NavigationAdapter; children: ReactNode }) {
  return <NavigationContext.Provider value={adapter ?? {}}>{children}</NavigationContext.Provider>
}

function shouldIntercept(event: MouseEvent<HTMLAnchorElement>, href: string, target?: string) {
  return (
    href.startsWith("/") &&
    !href.startsWith("//") &&
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    (!target || target === "_self")
  )
}

export function NavigationLink({ href, onClick, target, children, ...props }: NavigationLinkProps) {
  const adapter = useContext(NavigationContext)

  if (adapter.renderLink) {
    return <>{adapter.renderLink({ href, onClick, target, children, ...props })}</>
  }

  return (
    <a
      href={href}
      target={target}
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (adapter.navigate && shouldIntercept(event, href, target)) {
          event.preventDefault()
          adapter.navigate(href)
        }
      }}
    >
      {children}
    </a>
  )
}
