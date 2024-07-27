//! Navbar
let navbarLinks = document.querySelector(".nav-links");

let expandMenu = () => {
    navbarLinks.classList.toggle("nav-expanded");
};

document.querySelector(".toggle-button").addEventListener("click", expandMenu);

//! Reservation confirm
let sendReservationInfo = () => {
    let reservationName = document.getElementById("reservation-name").value;
    let reservationEmail = document.getElementById("reservation-email").value;
    let reservationPhone = document.getElementById("reservation-phone").value;
    let reservationDate = document.getElementById("reservation-date").value;
    let reservationTime = document.getElementById("reservation-time").value;
    let reservationSubjectRequests = document.getElementById("reservation-subject-requests").value;

    console.log(reservationDate);
    console.log(reservationTime);

    if (
        reservationName == "" ||
        reservationEmail == "" ||
        reservationPhone == "" ||
        reservationDate == "" ||
        reservationTime == "" ||
        reservationSubjectRequests == ""
    ) {
        alert("Please fill all the fields!");
    } else if (isNaN(reservationPhone)) {
        alert("Please enter a valid phone number");
    } else {
        document.querySelector(".reservation-confirmation").style.display = "flex";
        document.querySelector(".reservation-form").style.display = "none";
        document.querySelector(".reservation-form-head-text").style.display = "none";
        document.querySelector(".contact-container").style.display = "none";
    }
};

//! CHECKOUT VALIDATION
let cardOwnerName, cardNumberPart1, cardNumberPart2, cardNumberPart3, cardNumberPart4, cvvNumber, expMonth, expYear;

let resetCardInputColors = () => {
    let elements = [
        "#cardOwnerName",
        "#cardNumberPart1",
        "#cardNumberPart2",
        "#cardNumberPart3",
        "#cardNumberPart4",
        "#cvvNumber",
        "#expMonth",
        "#expYear"
    ];
    elements.forEach(id => {
        document.querySelector(id).style.border = "4px solid #5cc74a";
    });
};

let sendCardInfo = () => {
    resetCardInputColors();

    cardOwnerName = document.querySelector("#cardOwnerName").value;
    cardNumberPart1 = document.querySelector("#cardNumberPart1").value;
    cardNumberPart2 = document.querySelector("#cardNumberPart2").value;
    cardNumberPart3 = document.querySelector("#cardNumberPart3").value;
    cardNumberPart4 = document.querySelector("#cardNumberPart4").value;
    cvvNumber = document.querySelector("#cvvNumber").value;
    expMonth = document.querySelector("#expMonth").value;
    expYear = document.querySelector("#expYear").value;

    const hasNumbers = (input) => /\d/.test(input);

    //! GENERAL TESTING!!!
    if (
        !cardOwnerName ||
        !cardNumberPart1 ||
        !cardNumberPart2 ||
        !cardNumberPart3 ||
        !cardNumberPart4 ||
        !cvvNumber ||
        !expMonth ||
        !expYear
    ) {
        let elements = {
            cardOwnerName,
            cardNumberPart1,
            cardNumberPart2,
            cardNumberPart3,
            cardNumberPart4,
            cvvNumber,
            expMonth,
            expYear
        };

        Object.keys(elements).forEach(key => {
            document.getElementById(key).style.border = elements[key] ? "4px solid #5cc74a" : "4px solid red";
        });
    } else {
        document.querySelector(".card-input").style.border = "4px solid #5cc74a";
    }

    //! ALL INDIVIDUAL TESTING BEGINS HERE!!!

    //Counts how many valid inputs are there
    let validInput_count = 0;

    //* Card owner name validation
    if (hasNumbers(cardOwnerName) || /[!@#$%^&*]/.test(cardOwnerName)) {
        document.getElementById("cardOwnerHeaderText").innerHTML = "Invalid name";
        document.getElementById("cardOwnerHeaderText").style.color = "red";
        document.getElementById("cardOwnerName").style.border = "4px solid red";
    } else if (!cardOwnerName) {
        document.getElementById("cardOwnerHeaderText").innerHTML = "Enter your name";
        document.getElementById("cardOwnerName").style.border = "4px solid red";
        document.getElementById("cardOwnerHeaderText").style.color = "red";
    } else {
        //; VALID INPUT
        document.getElementById("cardOwnerHeaderText").innerHTML = "Card Owner";
        document.getElementById("cardOwnerHeaderText").style.color = "#343434";
        validInput_count += 1;
    }

    //* Card number validation
    // String validation
    let cardNumber = cardNumberPart1 + cardNumberPart2 + cardNumberPart3 + cardNumberPart4;
    if (cardNumber.length !== 16 || !hasNumbers(cardNumber) || isNaN(cardNumber)) {
        document.getElementById("cardNumberHeaderText").innerHTML = "Invalid Card";
        document.getElementById("cardNumberHeaderText").style.color = "red";
        document.querySelectorAll(".numb-input").forEach(element => {
            element.style.border = "4px solid red";
        });
    } else {
        //; VALID INPUT
        document.getElementById("cardNumberHeaderText").innerHTML = "Card Number";
        document.getElementById("cardNumberHeaderText").style.color = "#343434";
        document.querySelectorAll(".numb-input").forEach(element => {
            element.style.border = "4px solid #5cc74a";
        });
        validInput_count += 1;
    }

    // Actual card validation
    let cardNumber_sum_odd = 0;
    let cardNumber_sum_even = 0;
    let cardNumber_sum_total = 0;
    let cardNumber_validator = cardNumber;

    // Reverse string function
    const reverseString = (str) => (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0);

    // Addition of odd digit function (for cardNumber_sum_odd)
    const sumOddPlace = (number) => {
        let sum = 0;
        for (let i = 0; i < number.length; i += 2) {
            sum += parseInt(number[i]);
        }
        return sum;
    };

    // Addition and multiplication of even digit (for cardNumber_sum_even)
    const sumDoubleEvenPlace = (number) => {
        let sum = 0;
        for (let i = 1; i < number.length; i += 2) {
            let digit = parseInt(number[i]) * 2;
            if (digit > 9) digit -= 9;
            sum += digit;
        }
        return sum;
    };
};
