import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

    function decreaseQuantity(id: number): void {
        const item = cartItems.find((item) => item.id === id);
        if (item && item.quantity > 1) {
            updateQuantity(id, item.quantity - 1);
        } else if (item && item.quantity === 1) {
            removeFromCart(id);
        }
    }

     function increaseQuantity(id: number): void {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  }

  return (
    <div className="container mx-auto px-4 py-40">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No items in cart yet! 🍕
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex flex-row items-center gap-4 p-4 border-b">
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md bg-gray-200"
                  loading="lazy"
                />

                {/* Info Section */}
                <div className="flex flex-col flex-1 text-center md:text-left">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>

                  {/* Quantity Controls */}
                  <div className="flex flex-row md:flex-row items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-300 px-2 py-1 rounded-md"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-300 px-2 py-1 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800 font-bold"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            </div>
          ))}

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Order Summary</h2>
            <div className="flex justify-between text-lg mb-4">
              <span>Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={clearCart}
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors mb-3"
            >
              Clear Cart
            </button>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
