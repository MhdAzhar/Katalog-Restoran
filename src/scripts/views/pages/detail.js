import UrlParser from '../../routes/url-parser'
import RestoranSources from '../../data/Restoran-source'
import { createRestoranDetailTemplate } from '../templates/template-creator'
import RestoranFavoritIdb from '../../data/fav-idb'
import LikeButtonPresenter from '../../utils/like-button-presenter'

const Detail = {
  async render () {
    return `
      <div id="restoran_detail" class="restoran_detail">
        <div id='loader'></div>
      </div>
      <div id="likeButtonContainer"></div>
    `
  },
  async afterRender () {
    const url = UrlParser.parseActiveWithoutCombiner()
    const restoran = await RestoranSources.detailMovie(url.id)
    const restoranDetail = document.querySelector('#restoran_detail')
    restoranDetail.innerHTML = createRestoranDetailTemplate(restoran)
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: RestoranFavoritIdb,
      restoran: {
        id: restoran.id,
        name: restoran.name,
        pictureId: restoran.pictureId,
        rating: restoran.rating,
        description: restoran.description,
        city: restoran.city
      }
    })
  }
}

export default Detail
