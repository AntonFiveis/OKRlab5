import Router from '../router'
import { beforeAll, describe, expect, it } from '@jest/globals'

describe('Router Module', function () {
  const mainPage = `<div class="container-fluid " id="root"><div class="container"> <h1>Добро пожаловать на сайт Domino's Pizza</h1></div><div class="container carousel-container ">
    <div id="mainCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li class="active" data-target="#mainCarousel" data-slide-to="0"></li>
            <li data-target="#mainCarousel" data-slide-to="1"></li>
            <li data-target="#mainCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi.jpg" alt="" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min.jpg" alt="" class="d-block w-100">
            </div>
            <div class="carousel-item">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_300dpi-min.jpg" alt="" class="d-block w-100">
            </div>
        </div>
        <a href="#mainCarousel" class="carousel-control-prev" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a href="#mainCarousel" class="carousel-control-next" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>
</div>
<div class="container m-5 "><h1>Пиццы месяца</h1></div>
    <div class="container-fluid">
    <div class="row align-items-center justify-content-center text-center"> 
    <div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Пепперони с томатом</h4>
                    <p class="card-text">Моцарелла, Пепперони, Помидоры, Соус Барбекю</p>
                    
                    <button class="btn btn-success my-1 size-0 id-2">150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-2">300гр 135</button>
                                <br><button class="btn btn-success my-1 size-2 id-2">450гр 160</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%91%D0%BB%D1%8E%D0%B7_300dpi.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Пепперони Блюз</h4>
                    <p class="card-text">Бергадер Блю, Моцарелла, Пепперони, Соус Альфредо</p>
                    
                    <button class="btn btn-success my-1 size-0 id-4">150гр 120</button>
                                <br><button class="btn btn-success my-1 size-1 id-4">300гр 160</button>
                                <br><button class="btn btn-success my-1 size-2 id-4">450гр 200</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%93%D0%B0%D0%B2%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Гавайская</h4>
                    <p class="card-text">Курица, Ананас, Моцарелла, Соус Domino's</p>
                    
                    <button class="btn btn-success my-1 size-0 id-6">150гр 110</button>
                                <br><button class="btn btn-success my-1 size-1 id-6">300гр 130</button>
                                <br><button class="btn btn-success my-1 size-2 id-6">450гр 150</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div class="container m-3"><h1>Горячие акции!</h1></div>
    <div class="container-fluid">
    <div class="row align-items-center justify-content-center text-center"> 
    <div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Пепперони с томатом</h4>
                    <p class="card-text">Моцарелла, Пепперони, Помидоры, Соус Барбекю</p>
                    <p style="color:red">Special price -5%</p>
                    <button class="btn btn-success my-1 size-0 id-2">150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-2">300гр 135</button>
                                <br><button class="btn btn-success my-1 size-2 id-2">450гр 160</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%91%D0%BB%D1%8E%D0%B7_300dpi.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Пепперони Блюз</h4>
                    <p class="card-text">Бергадер Блю, Моцарелла, Пепперони, Соус Альфредо</p>
                    <p style="color:red">Special price -10%</p>
                    <button class="btn btn-success my-1 size-0 id-4">150гр 120</button>
                                <br><button class="btn btn-success my-1 size-1 id-4">300гр 160</button>
                                <br><button class="btn btn-success my-1 size-2 id-4">450гр 200</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>`
  beforeAll(() => {
    document.body.innerHTML = '<div  class="container-fluid " id="root"></div>'
    this.router = new Router('root')
  })
  it('render catalog', async () => {
    const path = '..#catalog'
    await this.router.render(path)
    const expected = `<div class="container-fluid " id="root"><div class="container"><h1>Наше меню</h1></div>
    <div class="container-fluid">
    <div class="row align-items-center justify-content-center text-center"> 
    <div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Маргарита</h4>
                    <p class="card-text">Моцарелла, Соус Domino's</p>
                    
                    <button class="btn btn-success my-1 size-0 id-1">150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-1">300гр 135</button>
                                <br><button class="btn btn-success my-1 size-2 id-1">450гр 160</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Пепперони с томатом</h4>
                    <p class="card-text">Моцарелла, Пепперони, Помидоры, Соус Барбекю</p>
                    
                    <button class="btn btn-success my-1 size-0 id-2">150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-2">300гр 135</button>
                                <br><button class="btn btn-success my-1 size-2 id-2">450гр 160</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Техас</h4>
                    <p class="card-text">Кукуруза, Лук, Грибы, Колбаски баварские, Моцарелла, Соус Барбекю</p>
                    
                    <button class="btn btn-success my-1 size-0 id-3">150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-3">300гр 135</button>
                                <br><button class="btn btn-success my-1 size-2 id-3">450гр 160</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%91%D0%BB%D1%8E%D0%B7_300dpi.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Пепперони Блюз</h4>
                    <p class="card-text">Бергадер Блю, Моцарелла, Пепперони, Соус Альфредо</p>
                    
                    <button class="btn btn-success my-1 size-0 id-4">150гр 120</button>
                                <br><button class="btn btn-success my-1 size-1 id-4">300гр 160</button>
                                <br><button class="btn btn-success my-1 size-2 id-4">450гр 200</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Тонни Пепперони</h4>
                    <p class="card-text">Моцарелла, Пепперони, Соус Domino's</p>
                    
                    <button class="btn btn-success my-1 size-0 id-5">150гр 120</button>
                                <br><button class="btn btn-success my-1 size-1 id-5">300гр 150</button>
                                <br><button class="btn btn-success my-1 size-2 id-5">450гр 180</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%93%D0%B0%D0%B2%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Гавайская</h4>
                    <p class="card-text">Курица, Ананас, Моцарелла, Соус Domino's</p>
                    
                    <button class="btn btn-success my-1 size-0 id-6">150гр 110</button>
                                <br><button class="btn btn-success my-1 size-1 id-6">300гр 130</button>
                                <br><button class="btn btn-success my-1 size-2 id-6">450гр 150</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/22/BBQ.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Барбекю</h4>
                    <p class="card-text">Курица, Лук, Бекон, Грибы, Моцарелла, Соус Барбекю</p>
                    
                    <button class="btn btn-success my-1 size-0 id-7">150гр 120</button>
                                <br><button class="btn btn-success my-1 size-1 id-7">300гр 150</button>
                                <br><button class="btn btn-success my-1 size-2 id-7">450гр 180</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>`

    expect(document.body.innerHTML).toEqual(expected)
  })
  it('render catalog with filter', async () => {
    const path = '..#catalog/vegetarian'
    await this.router.render(path)
    const expected = `<div class="container-fluid " id="root"><div class="container"><h1>Наше меню</h1></div>
    <div class="container-fluid">
    <div class="row align-items-center justify-content-center text-center"> 
    <div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Маргарита</h4>
                    <p class="card-text">Моцарелла, Соус Domino's</p>
                    
                    <button class="btn btn-success my-1 size-0 id-1">150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-1">300гр 135</button>
                                <br><button class="btn btn-success my-1 size-2 id-1">450гр 160</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>`
    expect(document.body.innerHTML).toEqual(expected)
  })
  it('render cart page', async () => {
    const path = '..#cart'
    localStorage.setItem('cart', JSON.stringify([{ id: 2, size: 0, count: 1 }, { id: 1, size: 1, count: 1 }]))

    await this.router.render(path)

    const expected = `<div class="container-fluid " id="root"><div class="container-fluid row">
        <div class="col-6">
        
    <div class="container w-100 m-2 text-center bg-light" style="border-radius:20px">
        <div class="row align-items-center justify-content-between">
            <img src="https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi.jpg" class="col-2" alt="">
            <div class="d-flex flex-column col-3">
                <h3>Пепперони с томатом</h3>
                <h5>Вес: 150 грамм</h5>
                <h5>Цена: 100</h5>
            </div>
            <div class="col-3"> Кол-во: <div id="count-0-2"> 1</div></div>
            <div class="row col-2">
            <button class="btn btn-success size-0 id-2">+</button>
            <button class="btn btn-danger size-0 id-2">-</button>
            </div>
        </div>
    </div>
    
    <div class="container w-100 m-2 text-center bg-light" style="border-radius:20px">
        <div class="row align-items-center justify-content-between">
            <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min.jpg" class="col-2" alt="">
            <div class="d-flex flex-column col-3">
                <h3>Маргарита</h3>
                <h5>Вес: 300 грамм</h5>
                <h5>Цена: 135</h5>
            </div>
            <div class="col-3"> Кол-во: <div id="count-1-1"> 1</div></div>
            <div class="row col-2">
            <button class="btn btn-success size-1 id-1">+</button>
            <button class="btn btn-danger size-1 id-1">-</button>
            </div>
        </div>
    </div>
    
        </div>
        <div class="col-6">
        <form id="mainForm">
        <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="email" required="">
</div>
<div class="form-group">
        <label for="name">Имя</label>
        <input type="text" class="form-control" id="name" placeholder="Your name" required="">
</div>
<div class="form-group">
        <label for="address">Адрес</label>
        <input type="text" class="form-control" id="address" placeholder="ул..." required="">
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
</div></div>`
    expect(document.body.innerHTML).toEqual(expected)
  })
  it('render main page', async () => {
    const path = '..#'
    await this.router.render(path)
    expect(document.body.innerHTML).toEqual(mainPage)
  })
  it('render actions page', async () => {
    const expected = `<div class="container-fluid " id="root"><div class="container actions-title"><h1>Лучшие акции месяца!</h1></div>
    <div class="container-fluid">
    <div class="row align-items-center justify-content-center text-center"> 
    <div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Маргарита</h4>
                    <p class="card-text">Моцарелла, Соус Domino's</p>
                    <p style="color:red">Special price -5%</p>
                    <button class="btn btn-success my-1 size-0 id-1">150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-1">300гр 135</button>
                                <br><button class="btn btn-success my-1 size-2 id-1">450гр 160</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Техас</h4>
                    <p class="card-text">Кукуруза, Лук, Грибы, Колбаски баварские, Моцарелла, Соус Барбекю</p>
                    <p style="color:red">Special price -10%</p>
                    <button class="btn btn-success my-1 size-0 id-3">150гр 100</button>
                                <br><button class="btn btn-success my-1 size-1 id-3">300гр 135</button>
                                <br><button class="btn btn-success my-1 size-2 id-3">450гр 160</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div><div class="col-sm-12 col-md-5 col-xl-2 m-3 p-2"> 
    <div class="container-fluid mt-4 card-container">
        <div class="container py-3">
            <div class="card">
                <img src="https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_300dpi-min.jpg" alt="" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">Пицца Тонни Пепперони</h4>
                    <p class="card-text">Моцарелла, Пепперони, Соус Domino's</p>
                    <p style="color:red">Special price -15%</p>
                    <button class="btn btn-success my-1 size-0 id-5">150гр 120</button>
                                <br><button class="btn btn-success my-1 size-1 id-5">300гр 150</button>
                                <br><button class="btn btn-success my-1 size-2 id-5">450гр 180</button>
                                <br>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>`
    await this.router.render('#actions')
    expect(document.body.innerHTML).toEqual(expected)
  })
  it('bundle event listeners for buttons on page', () => {
    document.body.innerHTML = `
        <button class="btn btn-success size-2 id-7">+</button>
        <button class="btn btn-danger size-2 id-7">-</button>
        `
    localStorage.setItem('cart', JSON.stringify([{ id: 7, size: 2, count: 3 }]))
    const click = new Event('click')
    this.router.makeListenersForButtons()
    document.getElementsByClassName('btn-success')[0].dispatchEvent(click)
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual([{ id: 7, size: 2, count: 4 }])
    document.getElementsByClassName('btn-danger')[0].dispatchEvent(click)
    expect(JSON.parse(localStorage.getItem('cart'))).toEqual([{ id: 7, size: 2, count: 3 }])
  })
  it('should bundle submit button with listener', async () => {
    localStorage.setItem('cart', JSON.stringify([{ id: 7, size: 2, count: 3 }]))
    document.body.innerHTML =
            `<div class="container-fluid " id="root"><div class="col-6">
        <form id="mainForm">
        <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="email" required value="a@gmail.com">
</div>
<div class="form-group">
        <label for="name">Имя</label>
        <input type="text" class="form-control" id="name" placeholder="Your name" required value="s">
</div>
<div class="form-group">
        <label for="address">Адрес</label>
        <input type="text" class="form-control" id="address" placeholder="ул..." required value="s">
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
    this.router.makeListenerForForm()
    const submit = new Event('submit')
    await document.getElementsByTagName('form')[0].dispatchEvent(submit)
    expect(this.router.cart.getCart()).toEqual([])
  })
})
