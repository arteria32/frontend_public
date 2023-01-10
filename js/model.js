class Model {
    constructor() {
      this.state = {
        pointer: 1,
        reservoirsContainer: [[],[],[],[],[],[],[],[]],
        settings: {
          maxCapacity: 1000,
          maxThreshold: 800,
          minThreshold: 200
        }
      }
    }
     
    async downloadElements (URL) {
      try {
        let response = await fetch(URL);
        let data = await response.json();
        return data;
      } catch (error) {
        alert('Ошибка доступа к серверу (README.md)');
        return this.state.reservoirsContainer
        }
      }

    setPointer(id) {
      this.state = {...this.state, pointer: id}
    }

    setReservoirs(data, id) {
      this.state = {...this.state, reservoirsContainer: this.state.reservoirsContainer.map((e, i) => i == id ? [...data] : [...e]), pointer: id}
      console.log(this.state)
    }

    setSettings(property, newValue) {
      switch (property) {
        case 'min':
          if (newValue >= this.state.settings.maxThreshold) {
            newValue = this.state.settings.maxThreshold - 1
          } else if (newValue < 0) {
            newValue = 0
          } else if (isNaN(newValue)) {
            break;
          }
          this.state = {...this.state, settings: {...this.state.settings, minThreshold: newValue}}
          break;
        case 'max':
          if (newValue <= this.state.settings.minThreshold) {
            newValue = this.state.settings.minThreshold + 1
          } else if (newValue > this.state.settings.maxCapacity) {
            newValue = 1000
          } else if (isNaN(newValue)) {
            break;
          }
          this.state = {...this.state, settings: {...this.state.settings, maxThreshold: newValue}}
        break;
        default:
          alert('Error')
          break;
      }
    }

    getState() {
      return {...this.state}
    }
  }
  
  export default Model;