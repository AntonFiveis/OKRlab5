import { makeCartCard } from '../../makeCard'
import cartPage from '../cart_page'
import { describe, it, expect } from '@jest/globals'
describe('Cart page Module', () => {
  it('should make cart card', () => {
    const data = [
      {
        pizza: { id: 1, title: 'title', img: 'img', description: 'desc', price: [100, 120, 150] },
        size: 1,
        count: 3
      }, {
        pizza: { id: 1, title: 'title', img: 'img', description: 'desc', price: [100, 120, 150] },
        size: 2,
        count: 2
      }
    ]
    const order = makeCartCard(data[0].pizza, data[0].size, data[0].count) + makeCartCard(data[1].pizza, data[1].size, data[1].count)
    const expected =
`<div class="container-fluid row">
        <div class="col-6">
        ${order}
        </div>
        <div class="col-6">
        <form id="mainForm">
        <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email"  placeholder="email" required>
</div>
<div class="form-group">
        <label for="name">Имя</label>
        <input type="text" class="form-control" id="name"  placeholder="Your name" required>
</div>
<div class="form-group">
        <label for="address">Адрес</label>
        <input type="text" class="form-control" id="address"  placeholder="ул..." required>
</div>
<div class="form-group">
    <label for="payType">Example select</label>
    <select class="form-control" id="payType">
      <option>Наличные</option>
      <option>Картой через терминал курьера</option>
    </select>
  </div>
<button type="submit" class="btn btn-primary" id="submit">Submit</button>
</form>
</div>
</div>`
    expect(cartPage(data)).toEqual(expected)
  })
})
