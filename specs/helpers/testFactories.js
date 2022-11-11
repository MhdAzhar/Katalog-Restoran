import RestoranFavoritIdb from '../../src/scripts/data/fav-idb'
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'

const createLikeButtonPresenterwithRestaurant = async (restoran) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: RestoranFavoritIdb,
    restoran
  })
}

export { createLikeButtonPresenterwithRestaurant }
