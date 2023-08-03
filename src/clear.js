export default clear;

function clear() {
  let content = document.getElementById("content");
 // content.remove();
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };
};
