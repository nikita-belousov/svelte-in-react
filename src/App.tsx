import * as React from 'react'
import { ComponentType } from 'svelte'
import { IButtonProps } from './components/button'
import Button from './components/button/Button.svelte'

import './App.css'

function SvelteWrapper<P = any>(Component: ComponentType) {
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

const SvelteButton = SvelteWrapper<IButtonProps>(Button)

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="card">
      <SvelteButton title={`Clicked ${count} times`} onClick={() => setCount(count + 1)} />
    </div>
  )
}

export default App