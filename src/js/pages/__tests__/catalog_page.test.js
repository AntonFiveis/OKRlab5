import { makeCard, makeRow } from '../../makeCard'
import catalogPage from '../catalog_page'
import { describe, expect, it } from '@jest/globals'

describe('Catalog page Module', () => {
  it('should make catalog page from data', () => {
    const data = [
      { id: 1, img: 'img', title: 'title', description: 'desc', price: [100, 120, 150] },
      { id: 2, title: 'title2', img: 'img2', description: 'desc2', price: [100, 120, 150] }
    ]
    const title = '<div class="container"><h1>Наше меню</h1></div>'
    const expected = title + makeRow([makeCard(data[0]), makeCard(data[1])])
    expect(catalogPage(data)).toEqual(expected)
  })
})
