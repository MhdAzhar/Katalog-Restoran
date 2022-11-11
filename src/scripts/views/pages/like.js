import RestoranFavoritIdb from '../../data/fav-idb'
import { createRestoranItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
    <section id="content">
        <h2>Daftar Restoran Favorit</h2>
        <div class="restoran-list">
            <div id='loader'></div>
        </div>
    </section>
    `
  },
  async afterRender () {
    const restorans = await RestoranFavoritIdb.getAllResto()
    const restoranList = document.querySelector('.restoran-list')
    restoranList.innerHTML = ''
    // eslint-disable-next-line no-lone-blocks
    { restorans.length
      ? restorans.forEach((restoran) => {
        restoranList.innerHTML += createRestoranItemTemplate(restoran)
      })
      : restoranList.innerHTML = '<div class="restoran-list__not__found">Daftar Kosong</div>'
    }
  }
}

export default Like
