const products = [
    { id: "prod1", name: "Product 1" },
    { id: "prod2", name: "Product 2" },
    { id: "prod3", name: "Product 3" },
    { id: "prod4", name: "Product 4" },
    { id: "prod5", name: "Product 5" }
];

window.onload = function() {
    const productSelect = document.getElementById("productName");

    // Dynamically populate the product select options
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
};

// Handle form submission and review counter
document.getElementById("reviewForm").onsubmit = function() {
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
};
