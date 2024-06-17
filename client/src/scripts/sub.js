const subBtn = document.querySelector('#subBtn');

subBtn.addEventListener('click', async () => {
    const subInput = document.querySelector('#subInput').value;

    try {
        const res = await fetch('/api/emails/createEmail', {
            method: 'POST',
            body: JSON.stringify({ email: subInput }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            const data = await res.json();
            console.log('Response:', data);
        } else {
            console.error('Error:', res.statusText);
        }
    } catch (e) {
        console.error('Fetch error:', e);
    }
});