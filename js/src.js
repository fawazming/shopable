   app.preloader.show();
    document.onreadystatechange = () =>{
        if (document.readyState === "complete"){
            // console.log('Created');
            store.dispatch('loadProducts');
            displayProds();
        }
    }

    function displayProds() {
        setTimeout(()=>{
            if(store.getters.productsLoading.value){
                displayProds();
            }else{
                // console.log(store.getters.products.value);
                populateListed(store.getters.products.value.products);
                app.preloader.hide();
            }
        }, 500)

    }

    function populateFeatured(pds) {
        let outp = '';
        pds.forEach((pd)=>{
            outp += `<div class="swiper-slide">
                        <div class="item-bx">
                            <div class="dz-media">
                                <a href="/product/${pd.id}"><img src="${pd.image}" alt=""></a>
                            </div>
                            <div class="dz-info">
                                <div class="dz-head">
                                    <h6 class="item-title"><a href="/item-details/">${pd.title}</a></h6>
                                </div>
                                <div class="dz-meta">
                                    <ul>
                                        <li class="price">$${pd.price}</li>
                                        <li class="qty"><strong class="text-primary">${pd.id}</strong>left</li>
                                    </ul>
                                </div>
                                <div class="dz-footer">
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        (${pd.rating.count} Reviews)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
        });
        document.querySelector('#featured').innerHTML = outp;
    }

        function populateListed(pds) {
        let outp = '';
        pds.forEach((pd)=>{
            outp += `<li class="col-100 medium-50 mb-20">
                                <div class="item-bx style-1 item-list">
                                    <div class="dz-media">
                                        <a href="/product/${pd.id}"><img src="${pd.image}" alt=""></a>
                                    </div>
                                    <div class="dz-info">
                                        <div class="dz-head">
                                            <h6 class="item-title"><a href="/product/${pd.id}">${pd.title}</a></h6>
                                        </div>
                                        <div class="dz-meta">
                                            <ul>
                                                <li class="price">$${pd.price}<del>$170</del></li>
                                                <li><div class="badge-danger dz-badge">15%</div></li>
                                            </ul>
                                        </div>
                                        <div class="dz-footer">
                                            <div class="rating"> <i class="fa fa-star"></i> (${pd.rating.count}) </div>
                                            <button onclick="cart('${pd.id}','${pd.title}',${pd.price},'${pd.image}')" class="button-large button color-orange button-outline cart-btn rounded-lg">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.9657 6.50236L24.0988 16.1356C23.9727 16.7824 23.6239 17.3655 23.1122 17.7852C22.6006 18.2049 21.9578 18.4351 21.2939 18.4364H8.23128C7.6013 18.4337 6.98986 18.2246 6.49201 17.8415C5.99416 17.4584 5.63779 16.9229 5.47831 16.3181C5.45639 16.2665 2.55384 1.89091 2.55384 1.89091H0.952749C0.700064 1.89091 0.457729 1.7913 0.279054 1.61399C0.100379 1.43668 0 1.1962 0 0.945454C0 0.694704 0.100379 0.454224 0.279054 0.276917C0.457729 0.0996101 0.700064 0 0.952749 0H2.55337C2.99367 0.00100676 3.42012 0.152847 3.76063 0.429853C4.10114 0.70686 4.33483 1.09204 4.42218 1.52029L4.97335 4.25455H24.0945C24.3753 4.25455 24.6525 4.31611 24.9065 4.4348C25.1604 4.5535 25.3848 4.72642 25.5636 4.94118C25.7424 5.15594 25.8711 5.40725 25.9406 5.67713C26.0102 5.94701 26.0187 6.22881 25.9657 6.50236ZM10.0039 20.3273C9.43856 20.3273 8.88595 20.4936 8.41591 20.8053C7.94587 21.1169 7.57952 21.5599 7.36319 22.0782C7.14686 22.5965 7.09025 23.1668 7.20054 23.717C7.31082 24.2672 7.58305 24.7726 7.98278 25.1692C8.38251 25.5659 8.8918 25.8361 9.44625 25.9455C10.0007 26.0549 10.5754 25.9988 11.0977 25.7841C11.6199 25.5694 12.0663 25.2059 12.3804 24.7394C12.6945 24.273 12.8621 23.7246 12.8621 23.1636C12.8614 22.4116 12.56 21.6906 12.0241 21.1589C11.4883 20.6271 10.7617 20.328 10.0039 20.3273ZM19.5314 20.3273C18.966 20.3273 18.4134 20.4936 17.9434 20.8053C17.4734 21.1169 17.107 21.5599 16.8907 22.0782C16.6743 22.5965 16.6177 23.1668 16.728 23.717C16.8383 24.2672 17.1105 24.7726 17.5103 25.1692C17.91 25.5659 18.4193 25.8361 18.9737 25.9455C19.5282 26.0549 20.1029 25.9988 20.6252 25.7841C21.1474 25.5694 21.5938 25.2059 21.9079 24.7394C22.222 24.273 22.3896 23.7246 22.3896 23.1636C22.3888 22.4116 22.0875 21.6906 21.5516 21.1589C21.0157 20.6271 20.2892 20.328 19.5314 20.3273Z" fill="#FF6712"/>
                                    </svg>
                                </button>
                                            <label class="bookmark-btn">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>`
        });
        document.querySelector('#listed').innerHTML = outp;
    }


    function cart(id, name, price, img) {
        store.dispatch('addItemToCart', {id, name, price, img})
    }



    // app.on('pageInit', function (page) {
    //     console.log('Page Init');
    // })
