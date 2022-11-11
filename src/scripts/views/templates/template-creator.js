import CONFIG from '../../globals/config'

const createRestoranItemTemplate = (restoran) => `
  <article tabindex="0" class="restoran-item">
      <div class="restoran-item__header">
          <img class="gambar lazyload" data-src=${CONFIG.BASE_IMAGE_URL + restoran.pictureId} alt=${restoran.name}>
          <p class="rating"><i class="ri-star-fill"></i> ${restoran.rating}</p>
      </div>
      <div class="restoran-item__body">
          <p class="kota"><i class="ri-map-pin-2-fill"></i> ${restoran.city}</p>
          <a class="nama" href="/#/detail/${restoran.id}">${restoran.name}</a></p>
          <p class="desc">${restoran.description.substring(0, 105)}...</p>
      </div>
  </article>
`

const createRestoranDetailTemplate = (restoran) => `
  <div class="container">
    <div class="restoran-detail">
      <div class="restoran-detail__header">
        <img class="detail_gambar" src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" alt="${restoran.name}">
        <p class="detail_rating"><i class="ri-star-fill"></i> ${restoran.rating}</p>
      </div>
      <div class="restoran-detail__info">
        <p class="info_nama">${restoran.name}</p>
        <p class="info_alamat"><i class="ri-map-pin-2-fill"></i> ${restoran.address}, ${restoran.city}</p>
        <p><span class="subtitle">Kategori</span>: 
  ` +
  restoran.categories.map((kategori) => {
    return kategori.name
  }) +
  `
        </p>
        <p><span class="subtitle">Makanan</span>: 
  ` +
  restoran.menus.foods.map((food) => {
    return food.name
  }) +
  `
        </p>
        <p><span class="subtitle">Minuman</span>: 
  ` +
  restoran.menus.drinks.map((drink) => {
    return drink.name
  }) +
  `
        </p>
      </div>
    </div>
    <h2>Deskripsi</h2>
    <p>${restoran.description}</p>
    <h2>Review Pelanggan</h2>
    ` +
  restoran.customerReviews.map((customer) => {
    return `
      <div class="customer-review">
        <p class="customer-name">${customer.name} <small>(${customer.date})</small></p>
        <q class="customer-text">${customer.review}</q>
      </div>
    `
  }) +
  `
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="tambahkan ke favorit" id="likeButton" class="like">
     <i class="ri-heart-line" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="Hapus dari favorit" id="likeButton" class="like">
    <i class="ri-heart-fill" aria-hidden="true"></i>
  </button>
`

export { createRestoranItemTemplate, createRestoranDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate }
