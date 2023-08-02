import renderHome from './home.js';
import renderTabBar from './tabBar.js';

renderTabBar();
renderHome();

let homeButton = document.getElementById('home');
homeButton.onclick = () => {
  renderHome();
};
// event listener for click -> renderMenu

// event listener for click -> renderContact
