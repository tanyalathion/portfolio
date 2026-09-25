const MENUBAR_HEIGHT = 23

export function openWindow(id: string) {
  const win = document.getElementById(id)
  if (!win) return
  win.classList.remove('window--hidden')
  win.style.zIndex = '100'

  const availableHeight = window.innerHeight - MENUBAR_HEIGHT
  win.style.left = `${Math.max(0, (window.innerWidth - win.offsetWidth) / 2)}px`
  win.style.top = `${MENUBAR_HEIGHT + Math.max(0, (availableHeight - win.offsetHeight) / 2)}px`

  document.getElementById('desktop-overlay')?.classList.remove('overlay--hidden')
}