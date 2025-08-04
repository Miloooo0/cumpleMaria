import { useState } from '#app'

export function useIconMode() {
  const mode = useState<'mini' | 'large'>('icon-mode', () => 'large')
  const toggle = () => {
    mode.value = mode.value === 'large' ? 'mini' : 'large'
  }
  return { mode, toggle }
}
