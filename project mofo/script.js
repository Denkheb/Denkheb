// Sample products
const products = [
    {
      id: 1,
      name: "iPhone 13",
      image: "iphone13.jpg"
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      image: "samsungs21.jpg"
    },
    {
      id: 3,
      name: "Google Pixel 6",
      image: "pixel6.jpg"
    }
  ];
  
  // Function to render wishlist items
  function renderWishlist() {
    const wishlistContainer = document.getElementById("wishlistContainer");
    wishlistContainer.innerHTML = "";
  
    products.forEach(product => {
      const wishlistItem = document.createElement("div");
      wishlistItem.classList.add("wishlist-item");
  
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
  
      const productName = document.createElement("span");
      productName.textContent = product.name;
  
      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => removeFromWishlist(product.id));
  
      wishlistItem.appendChild(image);
      wishlistItem.appendChild(productName);
      wishlistItem.appendChild(removeButton);
  
      wishlistContainer.appendChild(wishlistItem);
    });
  }
  
  // Function to remove item from wishlist
  function removeFromWishlist(productId) {
    const index = products.findIndex(product => product.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
      renderWishlist();
    }
  }
  
  // Initial render
  renderWishlist();
  