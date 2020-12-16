import '../css/css.css'
import Router from './router'
import Cart from './cart'

const router = new Router('root')
const cart = new Cart()
const links = document.querySelectorAll('.nav-item')
const brand = document.querySelector('.navbar-brand')
const total = document.querySelector('#cart_total')
window.addEventListener('load', async () => {
  await router.render(window.location.hash)
  total.innerHTML = await cart.calcTotal()
})
window.addEventListener('hashchange', async () => {
  await router.render(window.location.hash)
})
brand.addEventListener('click', async (ev) => {
  ev.preventDefault()
  window.history.replaceState(null, null, '#')
  await router.render(window.location.hash)
})
// root.addEventListener('change',()=>total.innerHTML = cart.calcTotal())
links.forEach(navItem => navItem.addEventListener('click', async (ev) => {
  ev.preventDefault()
  window.history.replaceState(null, null, '#' + ev.target.id.split('_')[0])
  await router.render(window.location.hash)
}))
