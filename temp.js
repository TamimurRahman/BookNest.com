const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill all fields.');
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email.');
      return;
    }

    const formData = { name, email, message };
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    successMsg.textContent = "Thanks! Your message has been saved.";
    form.reset();
  });
}
