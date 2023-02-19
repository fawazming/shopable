var store = Framework7.createStore({
    state: {
        firstName: 'DexignZone',
        lastName: 'Team',
        users: null,
        products: null,
        usersLoading: false,
        productsLoading: false,
        cart: [],
        cartCopy: [],
    },
    actions: {
        helloWorld(ctx) {
            app.dialog.alert('Hello world');
        },
        saveCart({ state }) {
            localStorage.setItem('shoppingCart', JSON.stringify(state.cart));
        },
        loadCart({ state }) {
            state.cart = JSON.parse(localStorage.getItem('shoppingCart'));
        },
        addItemToCart({ state, dispatch }, payload) {
            for (let item in state.cart) {
                if (state.cart[item].name === payload.name) {
                    console.log('same');
                    state.cart[item].count++;
                    dispatch('saveCart');
                    return;
                }
            }
            let item = { name: payload.name, price: payload.price, count: 1 };
            state.cart.push(item);
            dispatch('saveCart');
        },
        listCart({ state, dispatch }) {
            // state.cartCopy = [];
            if (localStorage.getItem("shoppingCart") != null) {
                dispatch('loadCart');
            }
            for (i in state.cart) {
                let item = state.cart[i];
                itemCopy = {};
                for (p in item) {
                    itemCopy[p] = item[p];
                }
                itemCopy.total = Number(item.price * item.count).toFixed(2);
                state.cartCopy.push(itemCopy)
            }
            // console.log(state.getters.cartCopy)
            // return cartCopy;
        },
        loadUsers({ state }) {
            state.usersLoading = true;
            setTimeout(() => {
                state.usersLoading = false;
                state.users = ['Aaron', 'Alexander', 'Candy', 'Chloe', 'Vladimir'];
            }, 3000);
        },
        loadProducts({ state, dispatch }) {
            state.productsLoading = true;
            if (localStorage.getItem("shoppingCart") != null) {
                dispatch('loadCart');
            }
            fetch('https://raw.githubusercontent.com/fawazming/cdn/master/productContent.json')
                .then(res => res.json())
                .then((json) => {
                    state.products = json;
                    state.productsLoading = false;
                })
                .catch((e) => { console.error(e) })
        },

    },
    getters: {
        usersLoading: ({ state }) => state.usersLoading,
        productsLoading: ({ state }) => state.productsLoading,
        users: ({ state }) => state.users,
        products: ({ state }) => state.products,
        cartCopy: ({ state }) => state.cartCopy,
        cart: ({ state }) => state.cart,
    },
});