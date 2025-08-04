export function useTaskbar() {
  const startOpen = useState('start-open', () => false)

  function toggleStart() {
    startOpen.value = !startOpen.value
  }

  return {
    startOpen,
    toggleStart
  }
}
