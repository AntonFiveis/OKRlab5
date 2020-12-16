import { beforeAll, describe, expect, it } from '@jest/globals'
import Client from '../test.server'

describe('Test server client module', function () {
  beforeAll(() => {
    this.client = new Client()
  })
  it('should get main page data from bd', async () => {
    const mainPageExpectedData = {
      catalog: [
        {
          id: 1,
          title: 'Маргарита',
          img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min.jpg',
          description: "Моцарелла, Соус Domino's",
          price: [100, 135, 160],
          features: ['vegetarian']
        },
        {
          id: 2,
          title: 'Пепперони с томатом',
          img: 'https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi.jpg',
          description: 'Моцарелла, Пепперони, Помидоры, Соус Барбекю',
          price: [100, 135, 160],
          features: ['sausage']
        },
        {
          id: 3,
          title: 'Техас',
          img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min.jpg',
          description: 'Кукуруза, Лук, Грибы, Колбаски баварские, Моцарелла, Соус Барбекю',
          features: ['sausage', 'mushrooms'],
          price: [100, 135, 160]
        },
        {
          id: 4,
          img: 'https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%91%D0%BB%D1%8E%D0%B7_300dpi.jpg',
          title: 'Пепперони Блюз',
          description: 'Бергадер Блю, Моцарелла, Пепперони, Соус Альфредо',
          features: ['sausage'],
          price: [120, 160, 200]
        },
        {
          id: 5,
          img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_300dpi-min.jpg',
          title: 'Тонни Пепперони',
          description: "Моцарелла, Пепперони, Соус Domino's",
          features: ['sausage'],
          price: [120, 150, 180]
        },
        {
          id: 6,
          title: 'Гавайская',
          img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%93%D0%B0%D0%B2%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_300dpi-min.jpg',
          description: "Курица, Ананас, Моцарелла, Соус Domino's",
          features: ['meat', 'pineapple'],
          price: [110, 130, 150]
        },
        {
          id: 7,
          img: 'https://media.dominos.ua/menu/product_osg_image_mobile/2018/02/22/BBQ.jpg',
          title: 'Барбекю',
          description: 'Курица, Лук, Бекон, Грибы, Моцарелла, Соус Барбекю',
          features: ['meat'],
          price: [120, 150, 180]
        }
      ],
      recommended: [1, 3, 5],
      orders:[],
      actions: [
        {
          id: 1,
          pizza_id: 1,
          action: 5
        },
        {
          id: 2,
          pizza_id: 3,
          action: 10
        },
        {
          id: 3,
          pizza_id: 5,
          action: 15
        }
      ]
    }

    expect(await this.client.getData('')).toEqual(mainPageExpectedData)
  })
  it('should get filter page data from bd', async () => {
    const filterVegPageExpectedData = [
      {
        id: 1,
        title: 'Маргарита',
        img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min.jpg',
        description: "Моцарелла, Соус Domino's",
        price: [100, 135, 160],
        features: ['vegetarian']
      }]

    expect(await this.client.getData('catalog/vegetarian')).toEqual(filterVegPageExpectedData)
  })
  it('should get actions page data from bd', async () => {
    const actionsPageExpectedData = [
      {
        action_pizza: {
          id: 1,
          title: 'Маргарита',
          img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min.jpg',
          description: "Моцарелла, Соус Domino's",
          price: [100, 135, 160],
          features: ['vegetarian']
        },
        action: 5

      },

      {
        action_pizza: {
          id: 3,
          title: 'Техас',
          img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min.jpg',
          description: 'Кукуруза, Лук, Грибы, Колбаски баварские, Моцарелла, Соус Барбекю',
          features: ['sausage', 'mushrooms'],
          price: [100, 135, 160]
        },
        action: 10
      },

      {
        action_pizza: {
          id: 5,
          img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_300dpi-min.jpg',
          title: 'Тонни Пепперони',
          description: "Моцарелла, Пепперони, Соус Domino's",
          features: ['sausage'],
          price: [120, 150, 180]
        },
        action: 15
      }
    ]

    expect(await this.client.getData('actions')).toEqual(actionsPageExpectedData)
  })
  it('should get expected pizza data from bd', async () => {
    const expectedPizza = {
      id: 1,
      title: 'Маргарита',
      img: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/04/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%B0_300dpi-min.jpg',
      description: "Моцарелла, Соус Domino's",
      price: [100, 135, 160],
      features: ['vegetarian']
    }

    expect(await this.client.getData('catalog/1')).toEqual(expectedPizza)
  })
})
