const itActsAsFavoriteRestoModel = (favoriteRestoran) => {
  it('Seharusnya mengembalikan Restoran yang telah ditambahkan', async () => {
    favoriteRestoran.putResto({ id: 1 })
    favoriteRestoran.putResto({ id: 2 })

    expect(await favoriteRestoran.getResto(1)).toEqual({ id: 1 })
    expect(await favoriteRestoran.getResto(2)).toEqual({ id: 2 })
    expect(await favoriteRestoran.getResto(3)).toEqual(undefined)
  })

  it('Seharusnya menolak restoran untuk ditambahkan jika tidak memiliki property yang benar', async () => {
    favoriteRestoran.putResto({ aProperty: 'property' })

    expect(await favoriteRestoran.getAllResto()).toEqual([])
  })

  it('dapat mengembalikan semua restoran yang telah ditambahkan', async () => {
    favoriteRestoran.putResto({ id: 1 })
    favoriteRestoran.putResto({ id: 2 })

    expect(await favoriteRestoran.getAllResto()).toEqual([
      { id: 1 },
      { id: 2 }
    ])
  })

  it('Seharusnya menghapus restoran favorit', async () => {
    favoriteRestoran.putResto({ id: 1 })
    favoriteRestoran.putResto({ id: 2 })
    favoriteRestoran.putResto({ id: 3 })

    await favoriteRestoran.deleteResto(1)

    expect(await favoriteRestoran.getAllResto()).toEqual([
      { id: 2 },
      { id: 3 }
    ])
  })

  it('Seharusnya menangani permintaan untuk menghapus restoran meskipun restoran belum ditambahkan', async () => {
    favoriteRestoran.putResto({ id: 1 })
    favoriteRestoran.putResto({ id: 2 })
    favoriteRestoran.putResto({ id: 3 })

    await favoriteRestoran.deleteResto(4)

    expect(await favoriteRestoran.getAllResto()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ])
  })
}

export { itActsAsFavoriteRestoModel }
