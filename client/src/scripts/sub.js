const subBtn = document.querySelector('#subBtn');

subBtn.addEventListener('click', async () => {
    const subInput = document.querySelector('#subInput');
    const subInputName = document.querySelector('#subInputName');
    const subError = document.querySelector('#subError');

    const values = {subInput,subInputName}

    switch(values){
        case values.subInputName.value.split(" ").length !== 2 && !values.subInput.value:
            return subError.innerHTML = "Please fill out for before you subscribe."
        case values.subInputName.value.split(" ").length !== 2:
            return subError.innerHTML = "Please enter first name followed by a space and then your last name.";
        case !values.subInput.value:
            return subError.innerHTML = "Please enter your eamil address."
    }

    try {
        const res = await fetch('/api/emails/createEmail', {
            method: 'POST',
            body: JSON.stringify({ email: subInput.value, name: subInputName.value }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            subInput.innerHTML, subInputName.innerHTML = ""
            const data = await res.json();
            console.log('Response:', data);
            subError.innerHTML = "Thanks For Subscribing!";

        } else if (res.status === 400) {
            subError.innerHTML = "You are already subscribed, thank you!"
            console.error('Error:', res.statusText.error);
        }
    } catch (err) {
        subError.innerHTML = "Sorry for the inconvenience, please try again later."
        console.error('Fetch error:', err);
    }
});