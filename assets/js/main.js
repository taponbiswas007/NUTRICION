document.addEventListener('DOMContentLoaded', function() {
    // Initialize labels based on existing values
    checkInput('empresario');
    checkInput('password');
});

function labelmove(inputId) {
    const label = document.getElementById(`l-${inputId}`);
    label.classList.add('floating');
}

function checkInput(inputId) {
    const input = document.getElementById(inputId);
    const label = document.getElementById(`l-${inputId}`);
    
    if (input.value.trim() === '' && document.activeElement !== input) {
        label.classList.remove('floating');
    } else {
        label.classList.add('floating');
    }
}

// Add event listeners for all inputs
document.querySelectorAll('.spectacledcoder-input input').forEach(input => {
    input.addEventListener('input', function() {
        checkInput(this.id);
    });
});