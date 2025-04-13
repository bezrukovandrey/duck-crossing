import { reactive, watch } from 'vue';

const savedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');

export const cartStore = reactive({
  items: savedCart,

  addToCart(item) {
    this.items.push(item);
  },

  removeFromCart(id) {
    this.items = this.items.filter(i => i.id !== id);
  },

  clearCart() {
    this.items = [];
  }
});

// Автоматически сохраняем изменения в localStorage
watch(
  () => cartStore.items,
  (newVal) => {
    localStorage.setItem('cartItems', JSON.stringify(newVal));
  },
  { deep: true }
);
