
// 4
import data from './data.json' assert { type: 'json' } 

// 7
import { defaultNavBarOption, getFuelData, getUniqueFuels, heightReservoirSquare, maxVolume, validation } from './helper.js'

let reservoirData = []

let navBarOptions = []
let currentFuel = ''
let minFuelValue = 200
let maxFuelValue = 800

const uploadBtn = document.getElementById('upload-data') // 1

const minInput = document.getElementById('min')
const maxInput = document.getElementById('max')

let navLinks = undefined

// 3
// обработчик нажатия кнопки
const onBtnClick = () => { 
  if (data.length) {
    uploadBtn.disabled = true

    reservoirData = data

    renderNavBar()

    renderMain(reservoirData) // 5
  }
}

const onInputChange = (input) => {
  const id = input?.target?.id
  switch (id) {
    case 'min':
      minFuelValue = input?.target?.value
      break
    case 'max':
      maxFuelValue = input?.target?.value
      break
    default:
      break
  }

  renderFilteredReservoirs()
  renderFooter()
}

const goToDefaultNavLink = () => {
  const currentMenuItem = document.getElementById(defaultNavBarOption.fuel)
  onNavClick(currentMenuItem)
}

const onNavClick = (menuItem) => {
  const id = menuItem?.getAttribute('id')
  if (id !== currentFuel) {
    const currentMenuItem = document.getElementById(currentFuel)
    currentMenuItem?.classList?.remove('navigation-item_current')
    currentMenuItem?.childNodes[1]?.classList?.remove('navigation-link_current')
    currentFuel = id
    
    menuItem?.classList.add('navigation-item_current')
    menuItem?.childNodes[1]?.classList?.add('navigation-link_current')
    
    renderFilteredReservoirs()
  }
}

const listenToNavBar = () => {
  navLinks = document.querySelectorAll('.navigation-item')
  navLinks?.forEach(item => {
    item.addEventListener('click', () => onNavClick(item))
  })
}

const renderNavBar = () => {
  navBarOptions = [defaultNavBarOption.fuel, ...getUniqueFuels(reservoirData)]

  const container = document.querySelector('.fuel-navigation-list')
  container.innerHTML = ''

  navBarOptions.forEach((item) => {
    const fuelData = item === defaultNavBarOption.fuel ? defaultNavBarOption : getFuelData(item)
    const template = renderNavItem(fuelData)
    container.appendChild(template);
  })

  listenToNavBar()
  goToDefaultNavLink()
}

const renderNavItem = (item) => {
  const menuItem = `
    <li class="navigation-item" id="${item?.fuel}">
      <a class="navigation-link" href="#"">${item?.name?.toUpperCase()}</a>
    </li>
  `
  const template = document.createElement('template');
  template.innerHTML = menuItem
  return template.content
}

const renderFilteredReservoirs = () => {
  if (!currentFuel || currentFuel === defaultNavBarOption.fuel) {
    renderMain(reservoirData)
  } else {
    const filtered = reservoirData?.filter(elem => elem?.fuel === currentFuel)
    renderMain(filtered)
  }
}

// 5 
const renderMain = (reservoirs) => {
  const container = document.querySelector('.reservoir-container')
  container.innerHTML = ''
  reservoirs.forEach((item, index) => {
    const reservoir = renderReservoir(item, index) // 6
    container.appendChild(reservoir);
  })
}

// 6
const renderReservoir = (item, index) => {
  // имя резервуара
  const name = item?.name || `№${index + 1}`
  // объем резервуара
  const volume = item?.volume || 0
  // топливо в резервуаре
  const fuel = getFuelData(item?.fuel)?.name

  const reservoirHeight = heightReservoirSquare * volume / maxVolume // (7)

  const reservoir = `
    <li class="reservoir-item">
      <div class="reservoir-title">
          <span>Масса</span>
          <span class="weight-reservoir">${volume}</span>
      </div>
      <div class="reservoir-content">
          <div class="reservoir-mass ${validation(volume, minFuelValue, maxFuelValue) ? 'reservoir-mass_green' : 'reservoir-mass_red'}"></div>
          <div class="reservoir-flask">
              <div class="flask-basement"></div>
              <div class="flask-content">
                  <div class="flask-mesure">
                      <span class="mesure-line"></span>
                      <span class="mesure-line"></span>
                      <span class="mesure-line"></span>
                  </div>
                  <div
                    class="flask-fuel-level"
                    style="height: ${reservoirHeight}px; margin-top: ${heightReservoirSquare - reservoirHeight}px"
                  ></div>
              </div>
              <div class="flask-basement"></div>
          </div>
      </div>
      <div class="reservoir-info">
          <div class="percent-square"><span class="percent-reservoir">${volume * 100 / maxVolume}%</span></div>
          <span>Уровень топлива<br>"${fuel}"<br>в резервуаре "${name}" </span>
      </div>
    </li>
  `

  const template = document.createElement('template');
  template.innerHTML = reservoir
  return template.content
}

const renderFooter = () => {
  const validation = `
    <li class="footer-info-container">
      <div class="footer-info-square footer-info-square_green"></div>
      <span>${minFuelValue} < МАССА < ${maxFuelValue}</span>
    </li>
    <li class="footer-info-container">
      <div class="footer-info-square footer-info-square_red"></div>
      <span>МАССА < ${minFuelValue} <br> МАССА > ${maxFuelValue} </span>
    </li>
  `
  const container = document.querySelector('.footer-info-list')
  container.innerHTML = ''
  const template = document.createElement('template');
  template.innerHTML = validation
  container.appendChild(template.content);
}

uploadBtn.addEventListener('click', () => onBtnClick()) // 2

minInput.addEventListener('input', (event) => onInputChange(event))
maxInput.addEventListener('input', (event) => onInputChange(event))

renderFooter()