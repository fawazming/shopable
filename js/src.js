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



    app.on('pageInit', function (page) {
        console.log('Page Init');
    })
    // console.log(store.getters.usersLoading.value);
    // store.dispatch('loadUsers');
    // store.dispatch('helloWorld');

