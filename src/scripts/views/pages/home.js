import RestoranSources from '../../data/Restoran-source'
import { createRestoranItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.png">
          <img src="./images/hero-image_2-large.png" alt="">
        </picture>
        <div class="hero__inner">
        <h1 class="hero__title">Restoran Apps</h1>
        <p class="hero__tagline">Temukan restoran favoritmu disini!</p>
        <button class="hero__action" type="button">Detail</button>
        </div>
    </div>
    <section id="content">
        <h2>Jelajahi Restoran</h2>
        <div class="restoran-list">
          <div id='loader'></div>
        </div>
    </section>
    `
  },
  async afterRender () {
    const restorans = await RestoranSources.home()
    const restoranList = document.querySelector('.restoran-list')
    restoranList.innerHTML = ''
    restorans.forEach((restoran) => {
      restoranList.innerHTML += createRestoranItemTemplate(restoran)
    })
  }
}

export default Home
