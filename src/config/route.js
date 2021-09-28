import MerchantInfo from '../views/merchant/info'
import EditMerchantInfo from '../views/merchant/edit'
import NotFound from '../views/notFound'

export const routeList = [
  {
    path: '/merchant/info',
    component: MerchantInfo
  },
  {
    path: '/merchant/edit',
    component: EditMerchantInfo
  },
  {
    path: '/404',
    component: NotFound
  }
]