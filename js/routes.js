var routes = [
    // Index page
    {
        path: '/home/',
        url: './pages/home.html',
        name: 'home',
        master(f7) {
            return f7.theme === 'aurora';
        },
    },
    // Async
    {
        path: '/product/:pid',
        async: function({ app, to, resolve }) {
            // Get external data and return page content
            app.request.json(`https://fakestoreapi.com/products/${to.params.pid}`).then(function(data) {
                resolve(
                    // How and what to load
                    {
                        content: `
                <div class="page">
                    <div class="navbar navbar-style-1 navbar-transparent navbar-items">
                        <div class="navbar-inner">
                            <a href="#" class="link back">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.439312 13.0606L5.75391 18.3752C6.04683 18.6682 6.43069 18.8146 6.81459 18.8146C7.1985 18.8146 7.58236 18.6682 7.87528 18.3752C8.46103 17.7894 8.46103 16.8397 7.87528 16.2539L5.12133 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5H5.12133L7.87528 7.7461C8.46103 7.1603 8.46103 6.21057 7.87528 5.62477C7.28944 5.03898 6.33975 5.03898 5.75391 5.62477L0.439312 10.9394C-0.146437 11.5251 -0.146437 12.4749 0.439312 13.0606Z" fill="black"/>
                                </svg>
                            </a>
                            <div class="right">
                                <a href="#" class="link panel-open" data-panel="left">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 12C14 10.8955 13.1046 10 12 10C10.8954 10 10 10.8955 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z" fill="black"/>
                                        <path d="M14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1045 10.8954 22 12 22C13.1046 22 14 21.1045 14 20Z" fill="black"/>
                                        <path d="M14 4C14 2.89544 13.1046 2.00001 12 2.00001C10.8954 2.00001 10 2.89544 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4Z" fill="black"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="page-content pt-80 bottom-sp80 item-details">
                        <div data-pagination='{"el": ".swiper-pagination", "hideOnClick": true}' class="swiper-container swiper-slider-wrapper swiper-init demo-swiper swiper-pagination1">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="${data.data.image}" alt="">
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="dz-banner-height"></div>
                        <div class="fixed-content">
                            <div class="main-info">
                                <div class="container">
                                    <div class="item-inner mb-30">
                                        <h2 class="item-title">${data.data.title}</h2>
                                        <label class="bookmark-btn bookmark-bx">
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="item-inner">
                                        <div class="dz-meta">
                                            <ul>
                                                <li class="price">$${data.data.price} <del>$${2*data.data.price}</del></li>
                                                <li><div class="badge-danger dz-badge">50%</div></li>
                                            </ul>
                                        </div>
                                        <div class="reviews-info">
                                            <i class="fa fa-star"></i>
                                            <h5 class="reviews">${data.data.rating.rate}</h5>
                                        </div>
                                    </div>
                                    <div class="item-inner pb-10 pt-10">
                                        <p>${data.data.description}</p>
                                    </div>
                                    <div class="item-inner mb-20">
                                        <div class="details-meta">
                                            <ul>
                                                <li>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 3.2012C5.10219 3.2012 2.20867 4.80206 0 7.99949C4.41734 14.3986 11.5827 14.3986 16 7.99949C13.7913 4.80206 10.8978 3.2012 8 3.2012ZM8 11.2012C6.23221 11.2012 4.79401 9.76724 4.79401 7.99945C4.79401 6.23166 6.23221 4.79346 8 4.79346C9.76779 4.79346 11.2017 6.23166 11.2017 7.99945C11.2017 9.76724 9.76779 11.2012 8 11.2012Z" fill="#B9BCD3"/>
                                                        <path d="M8.00003 9.60033C8.88415 9.60033 9.60088 8.88361 9.60088 7.99948C9.60088 7.11535 8.88415 6.39862 8.00003 6.39862C7.1159 6.39862 6.39917 7.11535 6.39917 7.99948C6.39917 8.88361 7.1159 9.60033 8.00003 9.60033Z" fill="#B9BCD3"/>
                                                    </svg>
                                                    ${data.data.rating.count} Reviewed
                                                </li>
                                                <li>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.45223 15.4146C6.87967 15.7919 7.43004 16 8 16C8.56996 16 9.12033 15.7919 9.54777 15.4146C11.4189 13.768 15.7934 9.42044 15.9932 4.6876C16.0579 3.51821 15.6588 2.37051 14.8826 1.49384C14.1064 0.617179 13.0157 0.0823835 11.8476 0.00564988C11.0918 -0.0304495 10.3396 0.130878 9.665 0.473769C8.99038 0.816661 8.41657 1.32931 8 1.96131C7.58527 1.3275 7.01182 0.813441 6.33675 0.470322C5.66169 0.127204 4.90856 -0.0330045 4.15237 0.00564988C2.98428 0.0823835 1.89364 0.617179 1.11741 1.49384C0.34118 2.37051 -0.0579257 3.51821 0.00680484 4.6876C0.206635 9.42044 4.58109 13.768 6.45223 15.4146Z" fill="#B9BCD3"/>
                                                    </svg>
                                                    3 Left
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           <!-- <div class="item-info">
                                <div class="container">
                                    <h5 class="title mt-0 mb-10">Variant</h5>
                                    <div data-space-between="15" data-slides-per-view="auto" data-centered-slides="false" data-pagination='{"el": ".swiper-pagination", "hideOnClick": true}' class="swiper-container swiper-init main-swiper tags-swiper">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <a href="#" class="badge-md">Small</a>
                                            </div>
                                            <div class="swiper-slide">
                                                <a href="#" class="badge-md">Medium</a>
                                            </div>
                                            <div class="swiper-slide">
                                                <a href="#" class="badge-md">Large</a>
                                            </div>
                                            <div class="swiper-slide">
                                                <a href="#" class="badge-md">Extra large</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <div class="item-info">
                                <div class="container">
                                    <h5 class="title mt-0 mb-10">Specifications</h5>
                                    <ul class="details-list">
                                        <li>Product <span>${data.data.title}</span></li>
                                        <li>Condition <span>NEW</span></li>
                                        <li>Category <span class="text-primary">${data.data.category}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="toolbar toolbar-bottom footer-button padding border-top item-details-btn container">
                        <div class="row">
                            <div class="col-30">
                                <button onclick="cart('${data.data.id}','${data.data.title}',${data.data.price},'${data.data.image}')" class="button-large button color-orange button-outline cart-btn rounded-lg">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.9657 6.50236L24.0988 16.1356C23.9727 16.7824 23.6239 17.3655 23.1122 17.7852C22.6006 18.2049 21.9578 18.4351 21.2939 18.4364H8.23128C7.6013 18.4337 6.98986 18.2246 6.49201 17.8415C5.99416 17.4584 5.63779 16.9229 5.47831 16.3181C5.45639 16.2665 2.55384 1.89091 2.55384 1.89091H0.952749C0.700064 1.89091 0.457729 1.7913 0.279054 1.61399C0.100379 1.43668 0 1.1962 0 0.945454C0 0.694704 0.100379 0.454224 0.279054 0.276917C0.457729 0.0996101 0.700064 0 0.952749 0H2.55337C2.99367 0.00100676 3.42012 0.152847 3.76063 0.429853C4.10114 0.70686 4.33483 1.09204 4.42218 1.52029L4.97335 4.25455H24.0945C24.3753 4.25455 24.6525 4.31611 24.9065 4.4348C25.1604 4.5535 25.3848 4.72642 25.5636 4.94118C25.7424 5.15594 25.8711 5.40725 25.9406 5.67713C26.0102 5.94701 26.0187 6.22881 25.9657 6.50236ZM10.0039 20.3273C9.43856 20.3273 8.88595 20.4936 8.41591 20.8053C7.94587 21.1169 7.57952 21.5599 7.36319 22.0782C7.14686 22.5965 7.09025 23.1668 7.20054 23.717C7.31082 24.2672 7.58305 24.7726 7.98278 25.1692C8.38251 25.5659 8.8918 25.8361 9.44625 25.9455C10.0007 26.0549 10.5754 25.9988 11.0977 25.7841C11.6199 25.5694 12.0663 25.2059 12.3804 24.7394C12.6945 24.273 12.8621 23.7246 12.8621 23.1636C12.8614 22.4116 12.56 21.6906 12.0241 21.1589C11.4883 20.6271 10.7617 20.328 10.0039 20.3273ZM19.5314 20.3273C18.966 20.3273 18.4134 20.4936 17.9434 20.8053C17.4734 21.1169 17.107 21.5599 16.8907 22.0782C16.6743 22.5965 16.6177 23.1668 16.728 23.717C16.8383 24.2672 17.1105 24.7726 17.5103 25.1692C17.91 25.5659 18.4193 25.8361 18.9737 25.9455C19.5282 26.0549 20.1029 25.9988 20.6252 25.7841C21.1474 25.5694 21.5938 25.2059 21.9079 24.7394C22.222 24.273 22.3896 23.7246 22.3896 23.1636C22.3888 22.4116 22.0875 21.6906 21.5516 21.1589C21.0157 20.6271 20.2892 20.328 19.5314 20.3273Z" fill="#FF6712"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="col-70">
                                <a href="/checkout-payment-method/" class="button-large button rounded-lg button-fill">BUY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>`
                    },
                );
            });
        }
    },
    // About page
    {
        path: '/about/',
        url: './pages/about.html',
        name: 'about',
    },
    // Right Panel pages
    {
        path: '/panel-right-1/',
        content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 1</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
    },
    {
        path: '/panel-right-2/',
        content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 2</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
    },

    // Account
    {
        path: '/signin/',
        componentUrl: './pages/signin.html',
    },
    {
        path: '/signup/',
        componentUrl: './pages/signup.html',
    },

    // Pages
    {
        path: '/welcome/',
        url: './pages/welcome.html',
    },
    {
        path: '/tracking/',
        url: './pages/tracking.html',
    },
    {
        path: '/profile/',
        url: './pages/profile.html',
    },
    {
        path: '/item-details/',
        url: './pages/item-details.html',
    },
    {
        path: '/notifications-app/',
        url: './pages/notifications-app.html',
    },
    {
        path: '/messages-list/',
        url: './pages/messages-list.html',
    },
    {
        path: '/products/',
        url: './pages/products.html',
    },
    {
        path: '/elements/',
        componentUrl: './pages/elements.html',
    },
    {
        path: '/featured-product/',
        url: './pages/featured-product.html',
    },
    {
        path: '/wishlist/',
        url: './pages/wishlist.html',
    },
    {
    path: '/some-page/',
    // Component
    component: (props, { $h, $f7, $on }) => {
      const title = 'Component Page';
      const names = ['John', 'Vladimir', 'Timo'];

      const openAlert = () => {
        $f7.dialog.alert('Hello world!');
      }

      $on('pageInit', (e, page) => {
        // do something on page init
      });
      $on('pageAfterOut', (e, page) => {
        // page has left the view
      });

      return () => $h`
        <div class="page">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner">
              <div class="title">${title}</div>
            </div>
          </div>
          <div class="page-content">
            <a @click=${openAlert} class="red-link">Open Alert</a>
            <div class="list simple-list">
              <ul>
                ${names.map((name) => $h`
                  <li>${name}</li>
                `)}
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },
    {
        path: '/shopping-cart/',
        url: './pages/shopping-cart.html',
    },
    {
        path: '/cart/',
        componentUrl: './pages/cart.html',
    },
    {
        path: '/checkout-payment-method/',
        url: './pages/checkout-payment-method.html',
    },
    {
        path: '/checkout-coupon-apply/',
        url: './pages/checkout-coupon-apply.html',
    },
    {
        path: '/checkout-shipping-address/',
        url: './pages/checkout-shipping-address.html',
    },

    // Components
    {
        path: '/accordion/',
        url: './pages/accordion.html',
    },
    {
        path: '/action-sheet/',
        componentUrl: './pages/action-sheet.html',
    },
    {
        path: '/appbar/',
        componentUrl: './pages/appbar.html',
    },
    {
        path: '/area-chart/',
        componentUrl: './pages/area-chart.html',
    },
    {
        path: '/autocomplete/',
        componentUrl: './pages/autocomplete.html',
    },
    {
        path: '/badge/',
        url: './pages/badge.html',
    },
    {
        path: '/buttons/',
        componentUrl: './pages/buttons.html',
    },
    {
        path: '/calendar/',
        componentUrl: './pages/calendar.html',
    },
    {
        path: '/calendar-page/',
        componentUrl: './pages/calendar-page.html',
    },
    {
        path: '/cards/',
        url: './pages/cards.html',
    },
    {
        path: '/cards-expandable/',
        url: './pages/cards-expandable.html',
    },
    {
        path: '/checkbox/',
        componentUrl: './pages/checkbox.html',
    },
    {
        path: '/chips/',
        componentUrl: './pages/chips.html',
    },
    {
        path: '/color-picker/',
        componentUrl: './pages/color-picker.html',
    },
    {
        path: '/contacts-list/',
        url: './pages/contacts-list.html',
    },
    {
        path: '/content-block/',
        url: './pages/content-block.html',
    },
    {
        path: '/data-table/',
        componentUrl: './pages/data-table.html',
    },
    {
        path: '/dialog/',
        componentUrl: './pages/dialog.html',
    },
    {
        path: '/elevation/',
        url: './pages/elevation.html',
    },
    {
        path: '/fab/',
        url: './pages/fab.html',
    },
    {
        path: '/fab-morph/',
        url: './pages/fab-morph.html',
    },
    {
        path: '/form-storage/',
        url: './pages/form-storage.html',
    },
    {
        path: '/gauge/',
        componentUrl: './pages/gauge.html',
    },
    {
        path: '/grid/',
        url: './pages/grid.html',
    },
    {
        path: '/icons/',
        componentUrl: './pages/icons.html',
    },
    {
        path: '/infinite-scroll/',
        componentUrl: './pages/infinite-scroll.html',
    },
    {
        path: '/inputs/',
        url: './pages/inputs.html',
    },
    {
        path: '/lazy-load/',
        url: './pages/lazy-load.html',
    },
    {
        path: '/list/',
        url: './pages/list.html',
    },
    {
        path: '/list-index/',
        componentUrl: './pages/list-index.html',
    },
    {
        path: '/login-screen/',
        componentUrl: './pages/login-screen.html',
    },
    {
        path: '/login-screen-page/',
        componentUrl: './pages/login-screen-page.html',
    },
    {
        path: '/menu/',
        componentUrl: './pages/menu.html',
    },
    {
        path: '/menu-list/',
        componentUrl: './pages/menu-list.html',
    },
    {
        path: '/messages/',
        componentUrl: './pages/messages.html',
    },
    {
        path: '/navbar/',
        url: './pages/navbar.html',
    },
    {
        path: '/navbar-hide-scroll/',
        url: './pages/navbar-hide-scroll.html',
    },
    {
        path: '/notifications/',
        componentUrl: './pages/notifications.html',
    },
    {
        path: '/panel/',
        url: './pages/panel.html',
    },
    {
        path: '/photo-browser/',
        componentUrl: './pages/photo-browser.html',
    },
    {
        path: '/picker/',
        componentUrl: './pages/picker.html',
    },
    {
        path: '/pie-chart/',
        componentUrl: './pages/pie-chart.html',
    },
    {
        path: '/popup/',
        componentUrl: './pages/popup.html',
    },
    {
        path: '/popover/',
        url: './pages/popover.html',
    },
    {
        path: '/preloader/',
        componentUrl: './pages/preloader.html',
    },
    {
        path: '/progressbar/',
        componentUrl: './pages/progressbar.html',
    },
    {
        path: '/pull-to-refresh/',
        componentUrl: './pages/pull-to-refresh.html',
    },
    {
        path: '/radio/',
        url: './pages/radio.html',
    },
    {
        path: '/range/',
        componentUrl: './pages/range.html',
    },
    {
        path: '/searchbar/',
        url: './pages/searchbar.html',
    },
    {
        path: '/searchbar-expandable/',
        url: './pages/searchbar-expandable.html',
    },
    {
        path: '/sheet-modal/',
        componentUrl: './pages/sheet-modal.html',
    },
    {
        path: '/skeleton/',
        componentUrl: './pages/skeleton.html',
    },
    {
        path: '/smart-select/',
        url: './pages/smart-select.html',
    },
    {
        path: '/sortable/',
        url: './pages/sortable.html',
    },
    {
        path: '/stepper/',
        componentUrl: './pages/stepper.html',
    },
    {
        path: '/subnavbar/',
        url: './pages/subnavbar.html',
    },
    {
        path: '/subnavbar-title/',
        url: './pages/subnavbar-title.html',
    },
    {
        path: '/swiper/',
        url: './pages/swiper.html',
        routes: [{
                path: 'swiper-horizontal/',
                url: './pages/swiper-horizontal.html',
            },
            {
                path: 'swiper-vertical/',
                url: './pages/swiper-vertical.html',
            },
            {
                path: 'swiper-space-between/',
                url: './pages/swiper-space-between.html',
            },
            {
                path: 'swiper-multiple/',
                url: './pages/swiper-multiple.html',
            },
            {
                path: 'swiper-nested/',
                url: './pages/swiper-nested.html',
            },
            {
                path: 'swiper-loop/',
                url: './pages/swiper-loop.html',
            },
            {
                path: 'swiper-3d-cube/',
                url: './pages/swiper-3d-cube.html',
            },
            {
                path: 'swiper-3d-coverflow/',
                url: './pages/swiper-3d-coverflow.html',
            },
            {
                path: 'swiper-3d-flip/',
                url: './pages/swiper-3d-flip.html',
            },
            {
                path: 'swiper-fade/',
                url: './pages/swiper-fade.html',
            },
            {
                path: 'swiper-scrollbar/',
                url: './pages/swiper-scrollbar.html',
            },
            {
                path: 'swiper-gallery/',
                componentUrl: './pages/swiper-gallery.html',
            },
            {
                path: 'swiper-custom-controls/',
                url: './pages/swiper-custom-controls.html',
            },
            {
                path: 'swiper-parallax/',
                url: './pages/swiper-parallax.html',
            },
            {
                path: 'swiper-lazy/',
                url: './pages/swiper-lazy.html',
            },
            {
                path: 'swiper-pagination-progress/',
                url: './pages/swiper-pagination-progress.html',
            },
            {
                path: 'swiper-pagination-fraction/',
                url: './pages/swiper-pagination-fraction.html',
            },
            {
                path: 'swiper-zoom/',
                url: './pages/swiper-zoom.html',
            },
        ],
    },
    {
        path: '/swipeout/',
        componentUrl: './pages/swipeout.html',
    },
    {
        path: '/tabs/',
        url: './pages/tabs.html',
    },
    {
        path: '/tabs-static/',
        url: './pages/tabs-static.html',
    },
    {
        path: '/tabs-animated/',
        url: './pages/tabs-animated.html',
    },
    {
        path: '/tabs-swipeable/',
        url: './pages/tabs-swipeable.html',
    },
    {
        path: '/tabs-routable/',
        url: './pages/tabs-routable.html',
        tabs: [{
                path: '/',
                id: 'tab1',
                content: `
        <div class="block">
          <p>Tab 1 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>
        </div>
        `,
            },
            {
                path: '/tab2/',
                id: 'tab2',
                content: `
        <div class="block">
          <p>Tab 2 content</p>
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
            },
            {
                path: '/tab3/',
                id: 'tab3',
                content: `
        <div class="block">
          <p>Tab 3 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
            },
        ],
    },
    {
        path: '/text-editor/',
        componentUrl: './pages/text-editor.html',
    },
    {
        path: '/toast/',
        componentUrl: './pages/toast.html',
    },
    {
        path: '/toggle/',
        url: './pages/toggle.html',
    },
    {
        path: '/toolbar-tabbar/',
        componentUrl: './pages/toolbar-tabbar.html',
        routes: [{
                path: 'tabbar/',
                componentUrl: './pages/tabbar.html',
            },
            {
                path: 'tabbar-labels/',
                componentUrl: './pages/tabbar-labels.html',
            },
            {
                path: 'tabbar-scrollable/',
                componentUrl: './pages/tabbar-scrollable.html',
            },
            {
                path: 'toolbar-hide-scroll/',
                url: './pages/toolbar-hide-scroll.html',
            },
        ],
    },
    {
        path: '/tooltip/',
        componentUrl: './pages/tooltip.html',
    },
    {
        path: '/treeview/',
        componentUrl: './pages/treeview.html',
    },
    {
        path: '/timeline/',
        url: './pages/timeline.html',
    },
    {
        path: '/timeline-vertical/',
        url: './pages/timeline-vertical.html',
    },
    {
        path: '/timeline-horizontal/',
        url: './pages/timeline-horizontal.html',
    },
    {
        path: '/timeline-horizontal-calendar/',
        url: './pages/timeline-horizontal-calendar.html',
    },
    {
        path: '/virtual-list/',
        componentUrl: './pages/virtual-list.html',
    },
    {
        path: '/virtual-list-vdom/',
        componentUrl: './pages/virtual-list-vdom.html',
    },
    {
        path: '/vi/',
        componentUrl: './pages/vi.html',
    },

    // Color Themes
    {
        path: '/color-themes/',
        componentUrl: './pages/color-themes.html',
    },

    // Effects
    {
        path: '/page-transitions/',
        componentUrl: './pages/page-transitions.html',
    },
    {
        path: '/page-transitions/:effect',
        componentUrl: './pages/page-transitions-effect.html',
    },

    // Page Loaders
    {
        path: '/page-loader-component/:user/:userId/:posts/:postId/',
        componentUrl: './pages/page-loader-component.html',
    },
    {
        path: '/master-detail/',
        url: './pages/master-detail-master.html',
        master: true,
        detailRoutes: [{
            path: '/master-detail/:id/',
            componentUrl: './pages/master-detail-detail.html',
        }, ],
    },

    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: './pages/404.html',
    },
];