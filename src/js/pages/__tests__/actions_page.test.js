import actionsPage from '../actions_page'
import { describe, expect, it } from '@jest/globals'
import { makeCard, makeRow } from '../../makeCard'

describe('Actions page Module', () => {
  it('should make actions page from data', () => {
    const data = [
      { action_pizza: { id: 1, title: 'title', img: 'img', description: 'desc', price: [100, 120, 150] }, action: 5 },
      {
        action_pizza: { id: 2, title: 'title2', img: 'img2', description: 'desc2', price: [100, 120, 150] },
        action: 5
      }
    ]
    const title = '<div class="container actions-title"><h1>Лучшие акции месяца!</h1></div>'
    const expected = title + makeRow([makeCard(data[0].action_pizza, data[0].action), makeCard(data[1].action_pizza, data[1].action)])
    expect(actionsPage(data)).toEqual(expected)
  })
})
