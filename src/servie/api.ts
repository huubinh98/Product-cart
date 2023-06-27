const Api = "https://dummyjson.com/products";

const productService = {
  getProduct(params: number) {
    return fetch(`${Api}?limit=${params}`).then((res) => res.json());
  },

  getSearchProduct(params: string) {
    return fetch(`${Api}/search?q=${params}`).then((res) => res.json());
  },
};

export default productService;
