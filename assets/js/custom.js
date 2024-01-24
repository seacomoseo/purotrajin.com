window.addEventListener('load', () => {
  const buttonEncuesta = document.querySelector('[href="#encuesta"]')
  if (buttonEncuesta) {
    const contactFormItemParent = buttonEncuesta.closest('.contact__form-item')
    function showEncuesta () {
      contactFormItemParent.classList.toggle('encuesta-activa')
    }
    showEncuesta()
    buttonEncuesta.addEventListener('click', showEncuesta)
  }
})
