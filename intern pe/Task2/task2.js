
const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 }
];

// Function to display items on the webpage
function displayItems() {
    const itemsSection = document.getElementById('items');
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: $${item.price}</p>
            <button>Add to Cart</button>
        `;
        itemsSection.appendChild(itemCard);
    });
}

// Call the displayItems function when the page loads
window.onload = displayItems;
