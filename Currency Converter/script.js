const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

// Populating dropdowns with currency options
for (let select of dropdowns) {
    for (let country in countryList) {
        let options = document.createElement("option");
        options.innerText = country;
        options.value = country;

        // Set default selected options
        if (select.name === "from" && country === "USD") {
            options.selected = true;
        } else if (select.name === "to" && country === "INR") {
            options.selected = true;
        }

        select.append(options);
    }

    // Event listener for changing the flag image
    select.addEventListener("change", (evt) => {
        changeImg(evt.target);
    });
}

// Function to change flag images dynamically
const changeImg = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Event listener for the Convert button
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    // Ensure a valid input amount
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // Fetch conversion rate from API
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        let data = await response.json();
        let rate = data[toCurr.value.toLowerCase()];

        // Display the converted amount
        let convertedAmount = (amtVal * rate).toFixed(2);
        document.querySelector(".result").innerText =
            `${amtVal} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch exchange rate. Please try again later.");
    }
});
