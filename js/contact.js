
// FormSubmit redirects back to the page with ?sent=true
// checks for that and shows the success message
// instead of the form.

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('sent') === 'true') {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (form && success) {
    form.style.display    = 'none';
    success.style.display = 'block';

    // Clean the URL so refreshing doesn't show success again
    window.history.replaceState({}, '', window.location.pathname);
  }
}