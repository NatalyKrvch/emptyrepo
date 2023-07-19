export const getAllProducts = (state) => state.products.products;
export const getLoadingProducts = (state) => state.products.isLoading;
export const getErrorProducts = (state) => state.products.error;
export const getCurrentProduct = state => state.products.currentProduct;