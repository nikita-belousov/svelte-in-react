import { SvelteComponentTyped } from 'svelte';

interface IButtonProps {
  title: string;
  type?: string;
  onClick?: () => void;
}

export default class Button extends SvelteComponentTyped<IButtonProps> {}