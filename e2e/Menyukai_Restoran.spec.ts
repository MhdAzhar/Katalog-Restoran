const assert = require('assert')

Feature('Menyukai Restoran')

Before(({ I }) => {
    I.amOnPage('/#/like')
})

Scenario('Menampilkan halaman like kosong', ({ I }) => {
  I.seeElement('.restoran-list')
  I.waitForElement('.restoran-list__not__found', 30)
  I.see('Daftar Kosong', '.restoran-list__not__found')
})

Scenario('Menambahkan satu restoran favorit', async ({ I }) => {
  I.waitForElement('.restoran-list__not__found', 30)
  I.see('Daftar Kosong', '.restoran-list__not__found')

  I.amOnPage('/')
  I.waitForElement('.nama', 30)
  const restoranAwal = locate('.nama').first()
  const namaRestoranAwal = await I.grabTextFrom(restoranAwal)
  I.click(restoranAwal)

  I.waitForElement('#likeButton', 30)
  I.click('#likeButton')

  I.amOnPage('/#/like')
  I.waitForElement('.restoran-item', 30)
  const namaRestoranFav = await I.grabTextFrom('.nama')

  assert.strictEqual(namaRestoranAwal, namaRestoranFav)
})

Scenario('Menghapus satu restoran favorit', async ({ I }) => {
    I.waitForElement('.restoran-list__not__found', 30)
    I.see('Daftar Kosong', '.restoran-list__not__found')
  
    I.amOnPage('/')
    I.waitForElement('.nama', 30)
    const restoranAwal = locate('.nama').first()
    const namaRestoranAwal = await I.grabTextFrom(restoranAwal)
    I.click(restoranAwal)
  
    I.waitForElement('#likeButton', 30)
    I.click('#likeButton')
  
    I.amOnPage('/#/like')
    I.waitForElement('.restoran-item', 30)
    const namaRestoranFav = await I.grabTextFrom('.nama')
    I.click(locate('.nama').first())
    I.waitForElement('#likeButton', 30)
    I.click('#likeButton')

    I.amOnPage('/#/like')
    I.waitForElement('.restoran-list__not__found', 30)
    I.see('Daftar Kosong', '.restoran-list__not__found')
    pause()
  
    assert.strictEqual(namaRestoranAwal, namaRestoranFav)
  })
