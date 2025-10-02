// Form Validation JavaScript
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Validation functions
    function validateName() {
      const name = nameInput.value.trim();
      if (name === '') {
        nameInput.classList.add('is-invalid');
        nameInput.classList.remove('is-valid');
        nameError.classList.add('show');
        return false;
      } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
        nameError.classList.remove('show');
        return true;
      }
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!email.includes('@') || !emailRegex.test(email)) {
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
        emailError.classList.add('show');
        return false;
      } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        emailError.classList.remove('show');
        return true;
      }
    }

    function validateMessage() {
      const message = messageInput.value.trim();
      if (message.length < 10) {
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
        messageError.classList.add('show');
        return false;
      } else {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
        messageError.classList.remove('show');
        return true;
      }
    }

    // Real-time validation on input
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    // Form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Hide success message if visible
      successMessage.classList.remove('show');
      
      // Validate all fields
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();
      
      // Check if all fields are valid
      if (isNameValid && isEmailValid && isMessageValid) {
        // Show success message
        successMessage.classList.add('show');
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form
        form.reset();
        
        // Remove validation classes
        nameInput.classList.remove('is-valid');
        emailInput.classList.remove('is-valid');
        messageInput.classList.remove('is-valid');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 5000);
      } else {
        // Show alert for invalid fields
        alert('Please correct the errors in the form before submitting.');
      }
    });

    // Download confirmation function
    function confirmDownload() {
      // Close the modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('downloadModal'));
      modal.hide();
      
      // Simulate download
      alert('Download started! Your resume will be saved shortly.');
      
      // In a real application, you would trigger the actual download here
      // For example: window.location.href = 'path/to/resume.pdf';
    }
