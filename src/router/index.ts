import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Cart from '../pages/Cart.vue'
import StoreFinder from '../pages/StoreFinder.vue'
import Favorites from '../pages/Favorites.vue'
import Account from '../pages/Account.vue'
import AccountOverview from '../pages/AccountOverview.vue'
import Orders from '../pages/Orders.vue'
import Address from '../pages/personal/Address.vue'
import Details from '../pages/personal/Details.vue'
import Password from '../pages/personal/Password.vue'
import Payment from '../pages/personal/Payment.vue'
import Social from '../pages/personal/Social.vue'
import Giftcard from '../pages/Giftcard.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/store-finder',
    name: 'StoreFinder',
    component: StoreFinder,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    children: [
      {
        path: '',
        name: 'AccountOverview',
        component: AccountOverview,
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
      },
      {
        path: 'addresses',
        name: 'Address',
        component: Address,
      },
      {
        path: 'my-details',
        name: 'Details',
        component: Details,
      },
      {
        path: 'change-password',
        name: 'Password',
        component: Password,
      },
      {
        path: 'payment-methods',
        name: 'Payment',
        component: Payment,
      },
      {
        path: 'social-accounts',
        name: 'Social',
        component: Social,
      },
      {
        path: 'gift-cards',
        name: 'Giftcard',
        component: Giftcard,
      },
    ],
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
