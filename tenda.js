// Ambil semua item menu
const menuItems = document.querySelectorAll("nav ul li");

// Tambahkan event listener ke setiap gambar tenda
menuItems.forEach((item) => {
  const tentImage = item.querySelector("img");

  tentImage.addEventListener("click", function (event) {
    event.preventDefault();
    const itemName = item.querySelector("a").textContent;
    const itemPrice = item.querySelector("p").textContent;
    document.getElementById(
      "menu"
    ).textContent = `Anda membeli item ${itemName}\n dengan Harga: ${itemPrice}`;
  });
});