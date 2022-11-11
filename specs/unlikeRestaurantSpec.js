import * as TestFactories from './helpers/testFactories'
import RestoranFavoritIdb from '../src/scripts/data/fav-idb'

describe('Tidak menyukai restoran', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await RestoranFavoritIdb.putResto({ id: 1 })
  })

  afterEach(async () => {
    await RestoranFavoritIdb.deleteResto(1)
  })

  it('Seharusnya menampilkan fitur unlike ketika restoran telah di like', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="Hapus dari favorit"]')).toBeTruthy()
  })

  it('Seharusnya tidak menampilkan fitur like jika restoran telah di like', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="tambahkan ke favorit"]')).toBeFalsy()
  })

  it('Seharusnya bisa menghapus restoran yang di like dari daftar', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({ id: 1 })

    document.querySelector('[aria-label="Hapus dari favorit"]').dispatchEvent(new Event('click'))
    expect(await RestoranFavoritIdb.getAllResto()).toEqual([])
  })

  it('Seharusnya tidak melakukan kesalahan jika restoran yang tidak disukai tidak ada dalam daftar', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({ id: 1 })

    await RestoranFavoritIdb.deleteResto(1)
    document.querySelector('[aria-label="Hapus dari favorit"]').dispatchEvent(new Event('click'))
    expect(await RestoranFavoritIdb.getAllResto()).toEqual([])
  })
})
