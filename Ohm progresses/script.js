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
    let reservationSubjectRequests = document.getElementById(
        "reservation-subject-requests"
    ).value;
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
        document.querySelector(".reservation-form-head-text").style.display =
            "none";
        document.querySelector(".contact-container").style.display = "none";
    }
};
