import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract'

let restoranFavorit = []

const FavoriteRestaurantArray = {
  getResto (id) {
    if (!id) {
      return
    }

    return restoranFavorit.find((restoran) => restoran.id === id)
  },

  getAllResto () {
    return restoranFavorit
  },

  putResto (restoran) {
    if (!restoran.hasOwnProperty('id')) {
      return
    }
    if (this.getResto(restoran.id)) {
      return
    }

    restoranFavorit.push(restoran)
  },

  deleteResto (id) {
    restoranFavorit = restoranFavorit.filter((restoran) => restoran.id !== id)
  }
}

describe('', () => {
  afterEach(() => restoranFavorit = [])

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray)
})
