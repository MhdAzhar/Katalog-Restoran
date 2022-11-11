import RestoranFavoritIdb from '../src/scripts/data/fav-idb'
import * as TestFactories from './helpers/testFactories'

describe('Menyukai restoran', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('Seharusnya menampilkan fitur like jika sebelumnya restoran belum di like', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="tambahkan ke favorit"]')).toBeTruthy()
  })

  it('Seharusnya tidak menampilkan fitur unlike jika sebelumnya restoran belum di like', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="Hapus dari favorit"]')).toBeFalsy()
  })

  it('Seharusnya bisa menyukai restoran', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const movie = await RestoranFavoritIdb.getResto(1)
    expect(movie).toEqual({ id: 1 })

    RestoranFavoritIdb.deleteResto(1)
  })

  it('Seharusnya tidak dapat menambahkan restoran lagi ketika sudah di like', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({ id: 1 })

    await RestoranFavoritIdb.putResto({ id: 1 })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await RestoranFavoritIdb.getAllResto()).toEqual([{ id: 1 }])
    RestoranFavoritIdb.deleteResto(1)
  })

  it('Seharusnya tidak menambahkan restoran ketika data tidak memiliki Id', async () => {
    await TestFactories.createLikeButtonPresenterwithRestaurant({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await RestoranFavoritIdb.getAllResto()).toEqual([])
  })
})
