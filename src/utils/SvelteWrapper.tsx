import * as React from 'react'
import type { ComponentType } from 'svelte'

export function SvelteWrapper<P = any>(Component: ComponentType) {
  return function Wrapped({ ...props }: P) {
    const ref = React.useRef<HTMLDivElement>(null)

    React.useLayoutEffect(() => {
      if (!ref.current) return

      while (ref?.current?.firstChild) {
        ref.current?.removeChild(ref.current?.firstChild)
      }

      const instance = new Component({
        target: ref.current,
        props
      })

      return () => {
        instance.$destroy()
      }
    }, [props])

    return <div ref={ref} />
  }
}