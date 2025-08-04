export function useTaskbar() {
  const startOpen = useState('start-open', () => false)
  const playerOpen = useState('player-open', () => false)

  function toggleStart() {
    startOpen.value = !startOpen.value
  }

  function togglePlayer() {
    playerOpen.value = !playerOpen.value
  }

  return {
    startOpen,
    playerOpen,
    toggleStart,
    togglePlayer,
  }
}
