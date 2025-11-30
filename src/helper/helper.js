const shortenAvgRate = (num) => {
  return num?.toFixed(2);
};

const formatPrice = (input) => {
  return input?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getLocalStorageCart = () => {
  if (typeof window === 'undefined') {
    return [];
  }
  return JSON.parse(localStorage.getItem('cartItems')) || [];
};

export const addItemToLocalStorage = (item) => {
  if (typeof window === 'undefined') return;
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const existingItemIndex = cartItems.findIndex((i) => i._id === item._id);
  if (existingItemIndex > -1) {
    cartItems[existingItemIndex].quantity = item.quantity;
  } else {
    cartItems.push(item);
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeItemFromLocalStorage = (itemId) => {
  if (typeof window === 'undefined') return;
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
};

export { shortenAvgRate, formatPrice };

export const validateEmail = (email) => {
  if (!email) return false;
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

export const passwordRules = (password) => ({
  length: password?.length >= 8,
  uppercase: /[A-Z]/.test(password || ''),
  lowercase: /[a-z]/.test(password || ''),
  number: /[0-9]/.test(password || ''),
  special: /[!@#$%^&*(),.?":{}|<>]/.test(password || ''),
});

export const validatePassword = (password) => {
  const validations = passwordRules(password);
  return { ok: Object.values(validations).every(Boolean), validations };
};
