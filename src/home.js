export default renderHome;

function renderHome() {
  const body = document.querySelector('body');

  const content = document.createElement('div');
  content.id = 'content';

  const title = document.createElement('h1');
  title.textContent = "Old Tom's Country Life Pub";

  content.appendChild(title);

  body.appendChild(content);
  console.log('something');
}
