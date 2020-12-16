import { makeCard, makeCartCard, makeRow } from '../makeCard'
import { describe, expect, it } from '@jest/globals'

describe('Make Card Module', () => {
  it('should make card with parameters', () => {
    const pizza = {
      img: 'img',
      title: 'title',
      description: 'desc',
      id: 1,
      price: [100, 120, 150]
    }
    const action = 5
    const expected = `
    <div class="container-fluid mt-4 card-container" >
        <div class="container py-3">
            <div class="card">
                <img src="img" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца title</h4>
                    <p class="card-text">desc</p>
                    <p style="color:red">Special price -5%</p>
                    <button class="btn btn-success my-1 size-0 id-1" >150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-1" >300гр 120</button>
                                <br><button class="btn btn-success my-1 size-2 id-1" >450гр 150</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    `
    expect(makeCard(pizza, action)).toEqual(expected)
  })

  it('should make card from cart with parameters', () => {
    const pizza = {
      img: 'img',
      title: 'title',
      description: 'desc',
      id: 1,
      price: [100, 120, 150]
    }
    const size = 1
    const count = 2
    const expected = `
    <div class="container w-100 m-2 text-center bg-light" style="border-radius:20px">
        <div class="row align-items-center justify-content-between">
            <img src="img" class="col-2" alt="">
            <div class="d-flex flex-column col-3">
                <h3>title</h3>
                <h5>Вес: 300 грамм</h5>
                <h5>Цена: 120</h5>
            </div>
            <div class="col-3"> Кол-во: <div id="count-1-1"> 2</div></div>
            <div class="row col-2">
            <button class="btn btn-success size-1 id-1">+</button>
            <button class="btn btn-danger size-1 id-1">-</button>
            </div>
        </div>
    </div>
    `
    expect(makeCartCard(pizza, size, count)).toEqual(expected)
  })

  it('should make row of elements', () => {
    const elements = ['<div>1</div>', '<div>2</div>']
    const expected = `
    <div class="container-fluid">
    <div class="row align-items-center justify-content-center text-center"> 
    <div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> <div>1</div></div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> <div>2</div></div>
    </div>
    </div>
    `
    expect(makeRow(elements)).toEqual(expected)
  })
})
