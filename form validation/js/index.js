const validation = [
    {
        value: "First Name",
        id: "first-name",
        error: "first-name-error",
        regex: /^[a-z]{0,30}$/,
    },
    {
        value: "Last Name",
        id: "last-name",
        error: "last-name-error",
        regex: /^[a-z]{0,30}$/,
    },
    {
        value: "Email Address",
        id: "email",
        error: "email-error",
        regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    {
        value: "Contact Number",
        id: "contact",
        error: "contact-error",
        regex: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    },
    {
        value: "Pin Code",
        id: "pincode",
        error: "pincode-error",
        regex: /^[1-9][0-9]{5}$/
    },
    {
        value: "Card Number",
        id: "card",
        error: "card-error",
        regex: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/

    },
    {
        value: "Card Expiry",
        id: "exp-card",
        error: "expiry-error",
        regex: /^\d{4}$/
    },
    {
        value: "CVV",
        id: "cvv",
        error: "cvv-error",
        regex: /^[0-9]{3,4}$/

    }
]
function validateform() {
    let formIsValid = true;
    // validation check
    for (let i = 0; i < validation.length; i++) {
        const inputElement = document.getElementById(validation[i].id);
        const inputValue = inputElement.value;
        const errorElement = document.getElementById(validation[i].error);
        // to check whether it is null // NA
        if (inputValue === '') {
            errorElement.innerHTML = validation[i].value + " " + "is required";
            inputElement.style.border = "1px solid #bf6f6a";
            formIsValid = false;
        }
       // to check for expiry-card
        else if (validation[i].id == "exp-card") {
            console.log(validation[i].id);
            let date = new Date().getFullYear();
            if (inputValue < date) {
                console.log(inputValue + " " + date);

                errorElement.innerHTML = validation[i].value + " " + "is not valid";
                inputElement.style.border = "1px solid #bf6f6a";
                formIsValid = false;
            }
            else {
                errorElement.innerHTML = '';
                inputElement.style.border = "1px solid #d7d7d7";

            }
        }
        // to check for regex match
        else if (!validation[i].regex.test(inputValue)) {
            errorElement.innerHTML = validation[i].value + " " + "is not valid";
            inputElement.style.border = "1px solid #bf6f6a";
            formIsValid = false;
        }

        else {
            errorElement.innerHTML = '';
            inputElement.style.border = "1px solid #d7d7d7";
        }
    }

    return formIsValid;
}
