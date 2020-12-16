import carousel from '../carousel'
import { makeCard, makeRow } from '../makeCard'

export default function mainPage (data) {
  const greeting = '<div class="container"> <h1>Добро пожаловать на сайт Domino\'s Pizza</h1></div>'
  const title4pizzas = '<div class="container m-5 "><h1>Пиццы месяца</h1></div>'

  const recommended = []
  data.recommended.forEach((pizzaId) => {
    recommended.push(makeCard(data.catalog[pizzaId]))
  })
  const titleActions = '<div class="container m-3"><h1>Горячие акции!</h1></div>'
  const actions = [makeCard(data.catalog[data.actions[0].pizza_id], data.actions[0].action), makeCard(data.catalog[data.actions[1].pizza_id], data.actions[1].action)]
  return greeting + carousel + title4pizzas + makeRow(recommended) + titleActions + makeRow(actions)
}
