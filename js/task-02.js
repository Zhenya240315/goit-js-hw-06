const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.guerySelector('#ingredients');
const markup = ingredients.map((ingredient) => {
  let item = document.createElement('li');
  item.className = 'item';
  item.textContent = `${ingredient}`;
  console.log(item);
  return item;
});

list.append(...markup);
