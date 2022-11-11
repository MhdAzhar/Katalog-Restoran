import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import Like from '../views/pages/like'

const routes = {
  '/': Home, // default page
  '/like': Like,
  '/detail/:id': Detail
}

export default routes
