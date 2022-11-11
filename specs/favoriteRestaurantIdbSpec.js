import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract'
import RestoranFavoritIdb from '../src/scripts/data/fav-idb'

describe('Implementasi tes kontrak Idb restoran favorit', () => {
  afterEach(async () => {
    (await RestoranFavoritIdb.getAllResto()).forEach(async (restoran) => {
      await RestoranFavoritIdb.deleteResto(restoran.id)
    })
  })

  itActsAsFavoriteRestoModel(RestoranFavoritIdb)
})
