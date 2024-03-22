import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue")
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import("../views/SignUp.vue")
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import("../views/SignIn.vue")
  },
  {
    path: '/category/show/:id',
    name: 'ListProduct',
    component: () => import('../views/Category/ListProducts.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: () => import('../views/Category/AddCategory.vue')
  },
  {
    path: '/admin/category',
    name: 'category',
    component: () => import('../views/Category/Category.vue')
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: () => import('../views/Category/EditCategory.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/product',
    name: 'product',
    component: () => import('../views/Product/Product.vue')
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: () => import('../views/Product/AddProduct.vue')
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: () => import('../views/Product/EditProduct.vue')
  },
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: () => import('../views/Product/ShowDetails.vue')
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: () => import('../views/Product/WishList.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
