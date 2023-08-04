export default renderMenu;

function renderMenu() {
  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.textContent = "Our Menu";

  const food = document.createElement('h2');
  food.textContent = "Food";

  const foodList = document.createElement('ul');
  const foodItems = ["Steak and Kidney Pie", "Fish and Chips", "Shepherd's Pie"];
  for (const element of foodItems) {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(element));
    foodList.appendChild(entry);
  };

  const beer = document.createElement('h2');
  beer.textContent = "Beers";

  const beerList = document.createElement('ul');
  const beerItems = ["Old Tom's Classic Bitter", "Queen's Lager", "Country Ale"];
  for (const element of beerItems) {
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(element));
    beerList.appendChild(entry);
  };

  const catNip = document.createElement('h3');
  catNip.textContent = "Complimentary catnip!";

  content.appendChild(title);
  content.appendChild(food);
  content.appendChild(foodList);
  content.appendChild(beer);
  content.appendChild(beerList);
  content.appendChild(catNip);
}
