import renderHome from './home.js';
import renderTabBar from './tabBar.js';
import clear from './clear.js';

renderTabBar();
renderHome();

let homeButton = document.getElementById('home');
homeButton.onclick = () => {
  clear();
  renderHome();
};
// event listener for click -> renderMenu

// event listener for click -> renderContact
