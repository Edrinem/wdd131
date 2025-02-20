// Product array
const products = [
    {id: 'p1', name: 'Product 1'},
    {id: 'p2', name: 'Product 2'},
    {id: 'p3', name: 'Product 3'},
    {id: 'p4', name: 'Product 4'}
];

// Populate the product dropdown dynamically
const productSelect = document.getElementById('product-name');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Handle the review submission to increase counter
document.getElementById('review-form').addEventListener('submit', function() {
    // Increment the review counter in localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    localStorage.setItem('reviewCount', reviewCount + 1);

    const lastModified = new Date(document.lastModified)
    document.getElementById("last-modified").textContent = document.lastModified;
});
