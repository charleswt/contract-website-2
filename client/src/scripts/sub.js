const subBtn = document.querySelector("#subBtn");

subBtn.addEventListener("click", async () => {
  const subInput = document.querySelector("#subInput");
  const subInputName = document.querySelector("#subInputName");
  const subError = document.querySelector("#subError");

  const email = subInput.value;
  const name = subInputName.value;

  // Error handling
  if (!email && name.split(" ").length !== 2) {
    subError.innerHTML = "Please fill out the form before you subscribe.";
    return;
  }

  if (name.split(" ").length !== 2) {
    subError.innerHTML = "Please enter first name followed by a space and then your last name.";
    return;
  }

  if (!email) {
    subError.innerHTML = "Please enter your email address.";
    return;
  }

  try {
    const res = await fetch("/api/emails/createEmail", {
      method: "POST",
      body: JSON.stringify({ email, name }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Response:", data);
      subInput.value = "";
      subInputName.value = "";
      subError.innerHTML = "Thanks For Subscribing!";
    } else {
      subError.innerHTML = "You are already subscribed, thank you!";
    }
  } catch (err) {
    subError.innerHTML = "Sorry for the inconvenience, please try again later.";
    console.error("Fetch error:", err);
  }
});