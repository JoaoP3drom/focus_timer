let darkMode = true

const buttonToggle = document.getElementById('toggle-mode')
buttonToggle.addEventListener('click', (event) => {
  const mode = darkMode ? 'light' : 'dark'
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
  darkMode = !darkMode
  document.documentElement.classList.toggle('light')
})
