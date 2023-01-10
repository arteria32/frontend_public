class View {
  toggleBurgerMenu() {
    document.getElementById('nav').classList.toggle('header__bottom_open')
	  document.getElementById('page').classList.toggle('page__wrap')
  }

  removeList() {
    document.querySelectorAll('.storage').forEach(element => element.id !== 'hidden' ? element.remove() : element)
  }

  render(data) {
    let storageListConatiner = document.querySelector('.storage-list__container')
    let storageList = document.querySelectorAll('.storage')

    document.querySelectorAll('.footer__conditions_min').forEach(el => el.innerHTML = data.settings.minThreshold)
    document.querySelectorAll('.footer__conditions_max').forEach(el => el.innerHTML = data.settings.maxThreshold)

    if (data.reservoirsContainer[data.pointer].length > 1) {
      storageList.forEach(e => e.id == 'hidden' ? e : e.remove());
      document.querySelector('.storage-list__template').classList.add('storage-list__template_hidden')
    } else {
      document.querySelector('.storage-list__template').classList.remove('storage-list__template_hidden')
    }

    for (let i = 0; i < data.reservoirsContainer[data.pointer].length; i++) {
      let clone = document.querySelector('.storage').cloneNode( true );
      clone.classList.toggle('storage_visible')
      clone.setAttribute( 'id', i );
      storageListConatiner.appendChild( clone );

      document
        .getElementById(i)
        .querySelector('.storage__header-number')
        .innerHTML = data.reservoirsContainer[data.pointer][i].volume

      document
        .getElementById(i)
        .querySelector('.storage__footer-number')
        .innerHTML = Math.floor(data.reservoirsContainer[data.pointer][i].volume/data.settings.maxCapacity*100) + '%'

      document
        .getElementById(i)
        .querySelector('.storage__footer-caption')
        .innerHTML = 'Уровень <br /> керосина <br /> в резервуаре №' + (i + 1);

      if (data.reservoirsContainer[data.pointer][i].volume < data.settings.minThreshold || data.reservoirsContainer[data.pointer][i].volume > data.settings.maxThreshold) {
        document
          .getElementById(i)
          .querySelector('.chart__indicator')
          .classList.add('chart__indicator_false')
      }
      
      let chart = document
        .getElementById(i)
        .querySelector('.chart__volume')
      chart.style.background = `linear-gradient(to top, #0089FF 0%, #0089FF ${Math.floor(data.reservoirsContainer[data.pointer][i].volume/data.settings.maxCapacity*100) + '%'}, #232532 ${Math.floor(data.reservoirsContainer[data.pointer][i].volume/data.settings.maxCapacity*100) + '%'}, #232532 100%)`
    }
  }
}

export default View;