let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('Produk telah ditambahkan ke keranjang!');
}