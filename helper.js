import fuels from './fuels.json' assert { type: 'json' }

export const maxVolume = 1000
export const heightReservoirSquare = 124

export const defaultNavBarOption = {
  name: "Все",
  fuel: "all",
}

export const validation = (value, minFuelValue, maxFuelValue) => {
  if (value > minFuelValue && value < maxFuelValue) return true
  return false
}

export const getFuelData = (id) => {
  return fuels?.find(elem => elem?.fuel === id)
}

export const getUniqueFuels = (reservoirData) => {
  let uniqueOptions = []
  reservoirData.forEach(item => {
    if (item?.fuel && !uniqueOptions.includes(item.fuel)) {
      uniqueOptions = [...uniqueOptions, item.fuel]
    }
  })
  return uniqueOptions
}