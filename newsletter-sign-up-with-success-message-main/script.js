const emailInput = document.getElementById("email");
const errorText = document.getElementById("error");
const promptElement = document.getElementById("prompt");
const successPrompt = document.getElementById("success");

function validateEmail() {

    let emailValue = emailInput.value;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "" || !email_pattern.test(emailValue)) {
        errorText.classList.remove("hidden");
        emailInput.className =
            "w-full border border-tomato bg-orange-50 text-tomato rounded-lg py-4 px-6 focus:outline-none";

        emailInput.addEventListener("focus", function () {
            errorText.classList.add("hidden");
            emailInput.className =
                "w-full border border-grey rounded-lg py-4 px-6 focus:outline-none focus:border-darkSlateGrey";
        });
        return false;
    }

    promptElement.classList.add("hidden");
    successPrompt.classList.remove("hidden");
}

function dismissMessage() {
    promptElement.classList.remove("hidden");
    successPrompt.classList.add("hidden");
}