//https://web3forms.com/
//e.target is the form
document.getElementById('contact-form').onsubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "1c0e93ee-2e73-44ed-8b48-73ae6a2c5ffd");
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Message Sent";
            e.target.reset();
        } else {
            result.innerHTML = "Error: " + data.message;
        }

    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message";
    } finally {
        setTimeout(() => {
            result.innerHTML = "";
        }, 1000);
    }
};