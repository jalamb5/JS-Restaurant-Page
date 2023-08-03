export default renderContact;

function renderContact() {
  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.textContent = "Contact Us";

  const email = document.createElement('p');
  email.textContent = "Email: oldtom@countrylife.email";
  
  const phone = document.createElement('p');
  phone.textContent = "Phone: 44 444 444 444";

  content.appendChild(title);
  content.appendChild(email);
  content.appendChild(phone);
}
