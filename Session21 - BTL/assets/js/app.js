let listProducts = JSON.parse(localStorage.getItem('products')) || [];

function loadProduct() {
    let listProductsFilter = listProducts.filter(p => p.status);
    let item = '';


    for (let p of listProductsFilter) {
        item += `<li>
                    <div class="product-card">

                    <figure class="card-banner">
                        <img src="${p.images}" width="189" height="189" loading="lazy" alt="Fresh Orangey">

                        <div class="btn-wrapper">
                        <button class="product-btn" aria-label="Add to Whishlist">
                            <ion-icon name="heart-outline"></ion-icon>

                            <div class="tooltip">Yêu thích</div>
                        </button>

                        <button class="product-btn" aria-label="Quick View">
                            <ion-icon name="eye-outline"></ion-icon>

                            <div class="tooltip">Xem nhanh</div>
                        </button>
                        </div>
                    </figure>

                    <div class="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>

                    <h3 class="h4 card-title">
                        <a href="product-details.html">${p.name}</a>
                    </h3>

                    <div class="price-wrapper">
                            <del class="del"></del>

                        <data class="price" value="">${p.price} VNĐ</data>
                    </div>

                    <button class="btn btn-primary buy" data-product="${p.id}">Chọn vé</button>

                    </div>
                </li>`;
    }

    $('.grid-list').html(item);
}


// Khai báo biến giỏ hàng
var carts = JSON.parse(sessionStorage.getItem('carts')) || [];

// XỬ LÝ MUA HÀNG
// Hiển thị giỏ hàng
function showQuantityProductInCart() {
    let total = 0;
    let quantity = 0;
    let cartTotal = document.getElementById("cart-total");

    for (let c of carts) {
        quantity += c.quantity;
        total += (c.quantity * c.price);
    }
    $('.total-carts-item').html(quantity);
}

// Mua hàng
$(document).on('click', '.buy', function () {
    let productId = $(this).data('product');
    let product = listProducts.find(x => x.id == productId);

    // Kiểm tra xem sp đó đã được mua chưa
    let cartIndex = carts.findIndex(c => c.productId == productId);
    console.log(cartIndex);

    if (cartIndex >= 0) {
        carts[cartIndex].quantity += 1;
    } else {
        // Thêm sản phẩm được mua vào giỏ hàng
        carts.push({
            productId,
            price: product.price,
            quantity: 1
        });
    }

    console.log(cartIndex);


    // Lưu session
    sessionStorage.setItem('carts', JSON.stringify(carts));
    showQuantityProductInCart();
    loadProductInCart();
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

showQuantityProductInCart();
loadProduct();
loadProductInCart();

function loadProductInCart() {
    let item = '';

    for (let p of carts) {
        let product = listProducts.find(x => x.id == p.productId);
        item += `<li class="panel-item">
                    <a href="product-details.html" class="panel-card">

                    <figure class="item-banner">
                        <img src="${product.images}" width="46" height="46" loading="lazy"
                        alt="Bright Side Vegetarian">
                    </figure>

                    <div>
                        <p class="item-title">${product.name}</p>

                        <span class="item-value">${product.price} x ${p.quantity}</span>
                    </div>

                    <button class="item-close-btn" aria-label="Remove item">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                    
                    </a>
                </li>`;
    }
    
    $('.panel-list').html(item);
}


function showTotalPrice() {
    let totalPrice = 0;
    for (let c of carts) {
      totalPrice += c.quantity * c.price;
    }
    $('#cart-total').text(totalPrice.toLocaleString('vi-VN') + ' VNĐ');
  }
  
showTotalPrice();


/**
 * whishlist & cart toggle
 */

const panelBtns = document.querySelectorAll("[data-panel-btn]");
const sidePanels = document.querySelectorAll("[data-side-panel]");

for (let i = 0; i < panelBtns.length; i++) {
    panelBtns[i].addEventListener("click", function () {

        let clickedElemDataValue = this.dataset.panelBtn;

        for (let i = 0; i < sidePanels.length; i++) {

            if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
                sidePanels[i].classList.toggle("active");
            } else {
                sidePanels[i].classList.remove("active");
            }

        }

    });
}








// let listProducts = JSON.parse(localStorage.getItem('products')) || [];

// function loadProduct() {
//     let listProductsFilter = listProducts.filter(p => p.status);
//     let item = '';


//     for (let p of listProductsFilter) {
//         item += `<li>
//                     <div class="product-card">

//                     <figure class="card-banner">
//                         <img src="${p.images}" width="189" height="189" loading="lazy" alt="Fresh Orangey">

//                         <div class="btn-wrapper">
//                         <button class="product-btn" aria-label="Add to Whishlist">
//                             <ion-icon name="heart-outline"></ion-icon>

//                             <div class="tooltip">Yêu thích</div>
//                         </button>

//                         <button class="product-btn" aria-label="Quick View">
//                             <ion-icon name="eye-outline"></ion-icon>

//                             <div class="tooltip">Xem nhanh</div>
//                         </button>
//                         </div>
//                     </figure>

//                     <div class="rating-wrapper">
//                         <ion-icon name="star"></ion-icon>
//                         <ion-icon name="star"></ion-icon>
//                         <ion-icon name="star"></ion-icon>
//                         <ion-icon name="star"></ion-icon>
//                         <ion-icon name="star"></ion-icon>
//                     </div>

//                     <h3 class="h4 card-title">
//                         <a href="product-details.html">${p.name}</a>
//                     </h3>

//                     <div class="price-wrapper">
//                             <del class="del"></del>

//                         <data class="price" value="">${p.price} VNĐ</data>
//                     </div>

//                     <button class="btn btn-primary buy" data-product="${p.id}">Chọn vé</button>

//                     </div>
//                 </li>`;
//     }

//     $('.grid-list').html(item);
// }


// // Khai báo biến giỏ hàng
// var carts = JSON.parse(sessionStorage.getItem('carts')) || [];

// // XỬ LÝ MUA HÀNG
// // Hiển thị giỏ hàng
// function showQuantityProductInCart() {
//     // let total = 0;
//     let quantity = 0;
//     let cartTotal = document.getElementById("cart-total");

//     for (let c of carts) {
//         quantity += c.quantity;
//         total += (c.quantity * c.price);
//     }
//     $('.total-carts-item').html(quantity);
// }

// // Mua hàng
// $(document).on('click', '.buy', function () {
//     let productId = $(this).data('product');
//     let product = listProducts.find(x => x.id == productId);

//     // Kiểm tra xem sp đó đã được mua chưa
//     let cartIndex = carts.findIndex(c => c.productId == productId);
//     console.log(cartIndex);

//     if (cartIndex >= 0) {
//         carts[cartIndex].quantity += 1;
//     } else {
//         // Thêm sản phẩm được mua vào giỏ hàng
//         carts.push({
//             productId,
//             price: product.price,
//             quantity: 1
//         });
//     }

//     console.log(cartIndex);


//     // Lưu session
//     sessionStorage.setItem('carts', JSON.stringify(carts));
//     showQuantityProductInCart();
//     loadProductInCart();
//     window.scroll({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//     });
// });

// showQuantityProductInCart();
// loadProduct();
// loadProductInCart();

// function loadProductInCart() {
//     let item = '';
//     let total = 0;

//     for (let p of carts) {
//         let product = listProducts.find(x => x.id == p.productId);
//         let subTotal = p.quantity * product.price;
//         total += subTotal;
//         item += `<li class="panel-item">
//                     <a href="product-details.html" class="panel-card">

//                     <figure class="item-banner">
//                         <img src="${product.images}" width="46" height="46" loading="lazy"
//                         alt="">
//                     </figure>

//                     <div>
//                         <p class="item-title">${product.name}</p>

//                         <span class="item-value">${product.price} x ${p.quantity}</span>
//                     </div>

//                     <button class="item-close-btn" aria-label="Remove item">
//                         <ion-icon name="close-outline"></ion-icon>
//                     </button>
                    
//                     </a>
//                 </li>`;
//     }
    
//     $('.panel-list').html(item);
//     $('.subtotal-value').html(`${total}VNĐ`);
// }


// function showTotalPrice() {
//     let totalPrice = 0;
//     for (let c of carts) {
//       totalPrice += c.quantity * c.price;
//     }
//     $('#cart-total').text(totalPrice.toLocaleString('vi-VN') + ' VNĐ');
//   }
  
// showTotalPrice();


// /**
//  * whishlist & cart toggle
//  */

// const panelBtns = document.querySelectorAll("[data-panel-btn]");
// const sidePanels = document.querySelectorAll("[data-side-panel]");

// for (let i = 0; i < panelBtns.length; i++) {
//     panelBtns[i].addEventListener("click", function () {

//         let clickedElemDataValue = this.dataset.panelBtn;

//         for (let i = 0; i < sidePanels.length; i++) {

//             if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
//                 sidePanels[i].classList.toggle("active");
//             } else {
//                 sidePanels[i].classList.remove("active");
//             }

//         }

//     });
// }