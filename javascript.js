
document.addEventListener("DOMContentLoaded", function () {

  const openAccountBtn = document.querySelector(".hero button");
  openAccountBtn.addEventListener("click", function () {
    alert("Thank you for choosing Bhardwaj Bank of India!\nOur team will contact you soon.");
  });

  const serviceButtons = document.querySelectorAll(".services button");
  serviceButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("This service page will be available soon.");
    });
  });


  const usefulButtons = document.querySelectorAll(".useful button");
  usefulButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert(`${this.innerText} - Service coming soon.`);
    });
  });

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      alert(`${this.innerText} page is under construction.`);
    });
  });

});
