// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Validate password
        const password = document.getElementById('password');
        const passwordError = document.getElementById('password-error');
        if (password.value.length < 8) {
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }
        
        // Validate confirm password
        const confirmPassword = document.getElementById('confirm-password');
        const confirmPasswordError = document.getElementById('confirm-password-error');
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.style.display = 'block';
            isValid = false;
        } else {
            confirmPasswordError.style.display = 'none';
        }
        
        // Validate age
        const age = document.getElementById('age');
        const ageError = document.getElementById('age-error');
        if (age.value === '' || parseInt(age.value) < 13) {
            ageError.style.display = 'block';
            isValid = false;
        } else {
            ageError.style.display = 'none';
        }
        
        // Validate country
        const country = document.getElementById('country');
        const countryError = document.getElementById('country-error');
        if (country.value === '') {
            countryError.style.display = 'block';
            isValid = false;
        } else {
            countryError.style.display = 'none';
        }
        
        // Validate terms
        const terms = document.getElementById('terms');
        const termsError = document.getElementById('terms-error');
        if (!terms.checked) {
            termsError.style.display = 'block';
            isValid = false;
        } else {
            termsError.style.display = 'none';
        }
        
        // If form is valid, show success message
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
    
    // Counter functionality
    let count = 0;
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    
    incrementBtn.addEventListener('click', function() {
        count++;
        counterValue.textContent = count;
    });
    
    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            counterValue.textContent = count;
        }
    });
    
    // Text manipulator functionality
    const textInput = document.getElementById('text-input');
    const textOutput = document.getElementById('text-output');
    const uppercaseBtn = document.getElementById('uppercase-btn');
    const lowercaseBtn = document.getElementById('lowercase-btn');
    const resetTextBtn = document.getElementById('reset-text-btn');
    
    uppercaseBtn.addEventListener('click', function() {
        textOutput.textContent = textInput.value.toUpperCase();
    });
    
    lowercaseBtn.addEventListener('click', function() {
        textOutput.textContent = textInput.value.toLowerCase();
    });
    
    resetTextBtn.addEventListener('click', function() {
        textInput.value = '';
        textOutput.textContent = '';
    });
    
    // Navigation link animation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section (would be implemented with actual sections)
            alert('Navigation would scroll to ' + this.textContent + ' section');
        });
    });
});