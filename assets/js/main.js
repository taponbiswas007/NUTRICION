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

  (function () {
    const videoModal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');

    videoModal.addEventListener('show.bs.modal', function (event) {
      const button = event.relatedTarget; // the button that opened the modal
      const baseUrl = button?.getAttribute('data-video-url') || '';
      if (!baseUrl) return;

      // Autoplay (muted helps avoid browser autoplay blocks)
      const url = baseUrl.includes('?') ? baseUrl + '&autoplay=1&mute=1' : baseUrl + '?autoplay=1&mute=1';
      iframe.src = url;
    });

    videoModal.addEventListener('hidden.bs.modal', function () {
      // Stop the video
      iframe.src = '';
    });
  })();
