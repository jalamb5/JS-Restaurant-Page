import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';
import renderTabBar from './tabBar.js';
import clear from './clear.js';

renderTabBar();
renderHome();

let homeButton = document.getElementById('home');
homeButton.onclick = () => {
  clear();
  renderHome();
};

let menuButton = document.getElementById('menu');
menuButton.onclick = () => {
  clear();
  renderMenu();
};

let contactButton = document.getElementById('contact');
contactButton.onclick = () => {
  clear();
  renderContact();
};
