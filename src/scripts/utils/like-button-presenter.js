import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator'

const LikeButtonPresenter = {
  async init ({ likeButtonContainer, favoriteRestaurants, restoran }) {
    this._likeButtonContainer = likeButtonContainer
    this._restoran = restoran
    this._restoranFavorite = favoriteRestaurants

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restoran
    if (await this._isRestoranExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestoranExist (id) {
    const restoran = await this._restoranFavorite.getResto(id)
    return !!restoran
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await this._restoranFavorite.putResto(this._restoran)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await this._restoranFavorite.deleteResto(this._restoran.id)
      this._renderButton()
    })
  }
}

export default LikeButtonPresenter
