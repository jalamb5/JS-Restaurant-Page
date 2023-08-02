export default renderTabBar;

function renderTabBar() {
  const body = document.querySelector('body');
  let tabBar = document.createElement('div');

  const home = document.createElement('button');
  home.innerHTML = 'Home';
  home.id = 'home';
 
  const menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';
  
  const contact = document.createElement('button');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';

  tabBar.appendChild(home);
  tabBar.appendChild(menu);
  tabBar.appendChild(contact);

  body.appendChild(tabBar);
}
