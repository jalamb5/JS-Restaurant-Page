export default renderHome;

// Check if content div exists, if not create it.
function establishContent() {
  let content = document.getElementById('content');

  if (!content) {
    content = document.createElement('div');
    content.id = 'content';
  }
  return content;
};


function renderHome() {
  const body = document.querySelector('body');

  const content = establishContent();

  const title = document.createElement('h1');
  title.textContent = "Old Tom's Country Life Pub";

  const image = new Image(250);
  image.src = "assets/IMG_2392.jpeg";

  const tagLine = document.createElement('p');
  tagLine.textContent = "At Old Tom's Country Life Pub, we have all the great ales, traditional English fare, and the world's best catnip";

  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(tagLine);

  body.appendChild(content);
}


