var store = Framework7.createStore({
  state: {
    firstName: 'DexignZone',
    lastName: 'Team',
    users: null,
    products: null,
    usersLoading: false,
    productsLoading: false,
  },
  actions: {
    helloWorld(ctx) {
      app.dialog.alert('Hello world');
    },
    loadUsers({ state }) {
      state.usersLoading = true;
      setTimeout(() => {
        state.usersLoading = false;
        state.users = ['Aaron', 'Alexander', 'Candy', 'Chloe', 'Vladimir'];
      }, 3000);
    },
    loadProducts({ state }) {
      state.productsLoading = true;
      fetch('https://raw.githubusercontent.com/fawazming/cdn/master/productContent.json')
            .then(res=>res.json())
            .then((json)=>{
                state.products = json;
                state.productsLoading = false;
            })
            .catch((e)=>{console.error(e)})
    },
  },
  getters: {
    usersLoading: ({ state }) => state.usersLoading,
    productsLoading: ({ state }) => state.productsLoading,
    users: ({ state }) => state.users,
    products: ({ state }) => state.products,
  },
});
