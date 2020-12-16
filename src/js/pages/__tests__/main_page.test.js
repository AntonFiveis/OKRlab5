import mainPage from '../main_page'
import carousel from '../../carousel'
import { describe, expect, it } from '@jest/globals'
import { makeCard, makeRow } from '../../makeCard'

describe('Main page Module', () => {
  it('should make main page', () => {
    const data = {
      catalog: [{ id: 1, title: 'title', img: 'img', description: 'desc', price: [100, 120, 150] }, {
        id: 2,
        title: 'title2',
        img: 'img2',
        description: 'desc2',
        price: [100, 120, 150]
      }, { id: 3, title: 'title3', img: 'img3', description: 'desc3', price: [100, 120, 150] }],
      actions: [{ id: 1, pizza_id: 1, action: 5 }, { id: 2, pizza_id: 2, action: 5 }],
      recommended: [1, 2]
    }

    const greeting = '<div class="container"> <h1>Добро пожаловать на сайт Domino\'s Pizza</h1></div>'
    const title4pizzas = '<div class="container m-5 "><h1>Пиццы месяца</h1></div>'
    const titleActions = '<div class="container m-3"><h1>Горячие акции!</h1></div>'
    const expected = greeting +
            carousel +
            title4pizzas +
            makeRow([makeCard(data.catalog[data.recommended[0]]), makeCard(data.catalog[data.recommended[1]])]) +
            titleActions +
            makeRow([makeCard(data.catalog[data.actions[0].pizza_id], data.actions[0].action), makeCard(data.catalog[data.actions[1].pizza_id], data.actions[1].action)])
    expect(mainPage(data)).toEqual(expected)
  })
})
