document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill all fields before submitting!');
      event.preventDefault();
    }
  });