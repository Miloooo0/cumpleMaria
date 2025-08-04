import { ref } from 'vue'

export interface WindowState {
  minimized: boolean
}

export function useWindows() {
  const windows = useState<Record<string, WindowState>>('windows', () => ({}))

  function open(id: string) {
    if (!windows.value[id]) {
      windows.value[id] = { minimized: false }
    } else {
      windows.value[id].minimized = false
    }
  }

  function close(id: string) {
    delete windows.value[id]
  }

  function toggle(id: string) {
    if (windows.value[id]) {
      windows.value[id].minimized = !windows.value[id].minimized
    }
  }

  return { windows, open, close, toggle }
}

