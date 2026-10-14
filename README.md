# Allways waitlist landing

Static landing page deployed with GitHub Pages.

## Waitlist backend

GitHub Pages serves only static files and cannot execute the PHP/MySQL backend.
Before accepting registrations, set the `waitlist-endpoint` meta tag in `index.html`
to the public HTTPS URL of the external waitlist API. Until then, the form clearly
states that online registration is not active and does not transmit visitor data.
