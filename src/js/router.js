import actionsPage from './pages/actions_page'
import loader from './loader'
import Client from './test.server'
import mainPage from './pages/main_page'
import Cart from './cart'
import catalogPage from './pages/catalog_page'
import cartPage from './pages/cart_page'

export default class Router {
  constructor (rootID) {
    this.root = document.getElementById(rootID)
    this.client = new Client()
    this.cart = new Cart(this.client)
  }

  async route (path, data = {}) {
    switch (path) {
      case 'catalog':
        this.root.innerHTML = catalogPage(data)
        this.makeListenersForButtons()
        break
      case 'cart':

        if (!(await this.cart.calcTotal())) {
          window.history.replaceState(null, null, '#')
          await this.render(window.location.hash)
        } else {
          // console.log(result)
          // console.log(this.cart.calcTotal())
          this.root.innerHTML = cartPage(data)
          this.makeListenersForButtons()
          this.makeListenerForForm()
        }

        break
      case 'loading':
        this.root.innerHTML = loader
        break
      case 'actions':
        this.root.innerHTML = actionsPage(data)
        this.makeListenersForButtons()
        break
      case '':
        this.root.innerHTML = mainPage(data)
        this.makeListenersForButtons()
        break

      default:
        window.history.replaceState(null, null, '#')
        await this.render(window.location.hash)
        break
    }
  }

  async render (path) {
    path = path.split('#')[1] || ''
    // console.log(parseQuery(path))
    this.route('loading')
    if (path !== 'cart') {
      const data = await this.client.getData(path)
      this.route(path.split('/')[0] || '', data)
    } else {
      const cart = this.cart.getCart()
      const catalog = await this.client.getData('catalog')
      // console.log(catalog)
      const data = []
      cart.forEach(el => {
        const dataItem = {}
        dataItem.pizza = catalog[el.id - 1]
        dataItem.count = el.count
        dataItem.size = el.size
        data.push(dataItem)
      })
      // console.log(data)
      await this.route('cart', data)
    }
  }

  makeListenersForButtons () {
    const buttonsClasses = ['btn-success', 'btn-danger']
    buttonsClasses.forEach((btnClss) => {
      const buttons = document.getElementsByClassName(btnClss)
      // console.log(buttons)
      const total = document.getElementById('cart_total')
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', async (evt) => {
          const id = +(evt.target.classList[evt.target.classList.length - 1].split('-')[1])
          const size = +(evt.target.classList[evt.target.classList.length - 2].split('-')[1])
          // console.log(id,size)
          const count = document.querySelector(`#count-${size}-${id}`)
          if (btnClss === buttonsClasses[0]) {
            this.cart.addToCart(size, id)
            if (count) { count.innerHTML = +(count.innerHTML) + 1 }
          }
          if (btnClss === buttonsClasses[1]) {
            this.cart.deleteFromCart(size, id)
            if (count) {
              count.innerHTML = +(count.innerHTML) - 1
              if (+count.innerHTML <= 0) { await this.render(window.location.hash) }
            }
          }

          const totalpr = await this.cart.calcTotal()

          total.innerHTML = totalpr
        })
      }
    })
  }

  makeListenerForForm () {
    const formElem = document.getElementById('mainForm')
    formElem.onsubmit = async (e) => {
      e.preventDefault()
      await this.client.post({ form: new FormData(formElem), cart: this.cart.getCart() })
      this.cart.clearCart()
      document.getElementById('cart_total').innerHTML = 0
      await this.render('..#')
    }
  }
}
