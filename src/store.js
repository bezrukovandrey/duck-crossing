import { reactive, watch } from 'vue';

export const store = reactive({
  isLoading: true,

  setLoading(value) {
    this.isLoading = value
  },
});

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

watch(
  () => cartStore.items,
  (newVal) => {
    localStorage.setItem('cartItems', JSON.stringify(newVal));
  },
  { deep: true }
);
