import { SvelteWrapper } from '../../utils/SvelteWrapper'
import Button from './Button.svelte'
import type { IButtonProps } from './index.d'

const WrappedButton = SvelteWrapper<IButtonProps>(Button)

export default WrappedButton