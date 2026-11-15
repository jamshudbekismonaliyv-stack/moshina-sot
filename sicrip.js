const search = document.getElementById("search");
const brand = document.getElementById("brand");
const cars = document.querySelectorAll(".car");

search.addEventListener("input", filterCars);
brand.addEventListener("change", filterCars);

function filterCars() {

  const searchText = search.value.toLowerCase();
  const selectedBrand = brand.value;

  cars.forEach(car => {

    const name = car.dataset.name.toLowerCase();
    const carBrand = car.dataset.brand;

    const searchMatch = name.includes(searchText);
    const brandMatch =
      selectedBrand === "all" ||
      carBrand === selectedBrand;

    if (searchMatch && brandMatch) {
      car.style.display = "block";
    } else {
      car.style.display = "none";
    }

  });
}


document.querySelectorAll(".buy-btn").forEach(button => {

  button.addEventListener("click", function() {

    const carName =
      this.closest(".car")
        .querySelector("h3")
        .textContent;

    alert(
      "Siz " + carName +
      " avtomobilini tanladingiz! 🚗"
    );

  });

});
