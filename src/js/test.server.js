import fetch from 'cross-fetch'

export default class Client {
  constructor () {
    this._urlBase = 'https://my-json-server.typicode.com/antonfiveis/OKRlab5/'
  }

  async post (body) {
    await fetch(this._urlBase + 'orders', { method: 'POST', body })
  }

  async getData (url) {
    const urlparts = url.split('/')
    if (urlparts[0] === '') {
      return fetch(this._urlBase + 'db').then(data => data.json())
    }

    if (urlparts.length > 1 && !(+urlparts[1])) {
      const data = await (await fetch(this._urlBase + urlparts[0])).json()
      return data.filter((item) => {
        return item.features.includes(urlparts[1])
      })
    }
    if (urlparts[0] === 'actions') {
      const actions = await fetch(this._urlBase + urlparts[0]).then(data => data.json())

      const data = []
      for (let i = 0; i < actions.length; i++) {
        const actionPizza = await fetch(this._urlBase + 'catalog/' + actions[i].pizza_id).then(data => data.json())

        data.push({ action_pizza: actionPizza, action: actions[i].action })
      }
      return data
    }
    return fetch(this._urlBase + url).then(data => data.json())
  }
}
