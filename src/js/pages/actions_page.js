import { makeCard, makeRow } from '../makeCard'

export default function actionsPage (data) {
  const title = '<div class="container actions-title"><h1>Лучшие акции месяца!</h1></div>'
  const pizzas = []
  data.forEach((pizza) => {
    pizzas.push(makeCard(pizza.action_pizza, pizza.action))
  })
  // console.log(pizzas)
  return title + makeRow(pizzas)
}
