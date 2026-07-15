// Password Visibility Toggle Utility
function setupToggle(toggleId, inputId) {
    const toggle = document.querySelector(toggleId);
    const input = document.querySelector(inputId);
    if (toggle && input) {
        toggle.addEventListener('click', function () {
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('bi-eye');
            this.classList.toggle('bi-eye-slash');
        });
    }
}

// Initialize visibility toggles for pages
setupToggle('#togglePassword', '#password');
setupToggle('#toggleConfirmPassword', '#confirm-password');

// Handle Form Submission and validation dynamically
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const passwordInput = document.querySelector('#password');
        const confirmPasswordInput = document.querySelector('#confirm-password');

        // Verify password match if confirmation field is present
        if (passwordInput && confirmPasswordInput) {
            if (passwordInput.value !== confirmPasswordInput.value) {
                alert('Passwords do not match! Please check and try again.');
                return;
            }
        }

        // Determine dynamic demo alert message based on form header
        const heading = document.querySelector('h1');
        let message = 'Form submitted successfully! (Demo)';
        
        if (heading) {
            const title = heading.textContent.trim().toLowerCase();
            if (title.includes('login')) {
                message = 'Login successful! (Demo)';
            } else if (title.includes('create') || title.includes('register')) {
                message = 'Registration successful! (Demo)';
            } else if (title.includes('reset')) {
                message = 'Password reset successful! (Demo)';
            }
        }

        alert(message);
    });
}
