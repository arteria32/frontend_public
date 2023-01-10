import Model from './model.js';
import View from './view.js';

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  setMinThresholdHandler(newValue) {
    this.model.setSettings('min', newValue)
    this.view.render(this.model.getState())
  }

  setMaxThresholdHandler(newValue) {
    this.model.setSettings('max', newValue)
    this.view.render(this.model.getState())
  }

  run() {
    let controller = this;

    let minThresholdValue = document.querySelectorAll('.footer__conditions_min')
    let maxThresholdValue = document.querySelectorAll('.footer__conditions_max')
  
    minThresholdValue.forEach((element) => {
      element.addEventListener('click', () => {
        element.innerHTML = `<input value='${''}' class='footer__conditions_min-input'/>`
        let input = document.querySelector('.footer__conditions_min-input')
        input.focus()

        input.addEventListener('change', () => {
          element.innerHTML = `<span class='footer__conditions_min'> ${input.value} </span>`
          controller.setMinThresholdHandler(input.value)
         })
      })
    })

    maxThresholdValue.forEach((element) => {
      element.addEventListener('click', () => {
        element.innerHTML = `<input value='${''}' class='footer__conditions_max-input'/>`
        let input = document.querySelector('.footer__conditions_max-input')
        input.focus()
      
        input.addEventListener('change', () => {
          element.innerHTML = `<span class='footer__conditions_max'> ${input.value} </span>`
          controller.setMaxThresholdHandler(input.value)
        })
    })
  })

  document.querySelectorAll('.nav__link').forEach((element, i) => {
    element.addEventListener('click', () => {
      document.querySelector('.nav__link_active').classList.remove('nav__link_active')
      element.classList.add('nav__link_active')
      this.model.setPointer(i)
      this.view.removeList()
      this.view.render(this.model.getState())
    })
  })

  let burgerMenuBtn = document.querySelector('.header__menu-button')
  burgerMenuBtn.addEventListener('click', () => {
    this.view.toggleBurgerMenu()
  })

  let getDataBtn = document.querySelector('.header__button')
  getDataBtn.addEventListener('click', () => {
    this.model
      .downloadElements('http://localhost:3000/reservoirsList')
      .then(response => this.model.setReservoirs(response[this.model.getState().pointer], this.model.getState().pointer))
      .then(result => this.view.render(this.model.getState()))
  })
}
}

export default Controller;