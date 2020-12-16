import { beforeAll, describe, expect, it } from '@jest/globals'
import Cart from '../cart'

describe('Cart module', function () {
  beforeAll(() => {
    this.cart = new Cart()
  })
  it('should get cart', () => {
    const expectedWithNoCartInLS = []
    expect(this.cart.getCart()).toEqual(expectedWithNoCartInLS)
    const expectedWithCartInLS = [{ id: 1, size: 1, count: 2 }, { id: 1, size: 2, count: 3 }]
    localStorage.setItem('cart', JSON.stringify(expectedWithCartInLS))
    expect(this.cart.getCart()).toEqual(expectedWithCartInLS)
  })
  it('should add pizza to cart', () => {
    localStorage.setItem('cart', JSON.stringify([{ id: 1, size: 1, count: 2 }, { id: 1, size: 2, count: 3 }]))

    const expectedAfterAddingExistingPizza = [{ id: 1, size: 1, count: 2 }, { id: 1, size: 2, count: 4 }]
    this.cart.addToCart(2, 1)
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual(expectedAfterAddingExistingPizza)
    const expectedAfterAddingNotExistingPizza = [{ id: 1, size: 1, count: 2 }, { id: 1, size: 2, count: 4 }, {
      id: 2,
      size: 1,
      count: 1
    }]
    this.cart.addToCart(1, 2)
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual(expectedAfterAddingNotExistingPizza)
  })
  it('should delete pizza from cart', () => {
    localStorage.setItem('cart', JSON.stringify([{ id: 1, size: 1, count: 2 }, { id: 1, size: 2, count: 3 }]))
    const expected = [{ id: 1, size: 1, count: 1 }, { id: 1, size: 2, count: 3 }]
    this.cart.deleteFromCart(1, 1)
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual(expected)
  })
  it('should clear cart', () => {
    localStorage.setItem('cart', JSON.stringify([{ id: 1, size: 1, count: 2 }, { id: 1, size: 2, count: 3 }]))
    const expected = []
    this.cart.clearCart()
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual(expected)
  })
  it('should calculate total from cart', async () => {
    localStorage.setItem('cart', JSON.stringify([{ id: 1, size: 1, count: 2 }]))
    const expected = 270
    const total = await this.cart.calcTotal()
    expect(total).toEqual(expected)
  })
})
