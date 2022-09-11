
const mainPhotos = document.querySelector('.main-photos');

const smallPhotos = document.querySelectorAll('.small-photos img');

const number = document.querySelector('.number');

const amountBtn = document.querySelectorAll('.amount-btn');

const cartBtn = document.querySelector('.cart-btn');

const cart = document.querySelector('.cart')

const remove = document.querySelector('.remove-icon');

const purchaseAmount = document.querySelector('.purchase-amount');

const finalPrice = document.querySelector('.final-price');

const basketIcon = document.querySelector('.basket-icon');

const basketAmount = document.querySelector('.basket-icon-amount');


const lightBox = document.querySelector('.lightbox');

mainPhotos.addEventListener('click', function() {
    lightBox.classList.remove('hide')
})

smallPhotos.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.choosen').classList.remove('choosen')
        element.classList.add('choosen');

        let src = element.src

        if (src.includes('1')) {
            mainPhotos.src = 'images/1.jpg'
        }

        if (src.includes('2')) {
            mainPhotos.src = 'images/2.jpg'
        }

        if (src.includes('3')) {
            mainPhotos.src = 'images/3.jpg'
        }

        if (src.includes('4')) {
            mainPhotos.src = 'images/4.jpg'
        }

    })
});


let shoesNumber = number.innerHTML;
shoesNumber = parseInt(shoesNumber);


amountBtn.forEach(element => {
    element.addEventListener('click', function (e) {

        if (element.classList.contains('plus')) {
            shoesNumber++;
            number.innerHTML = shoesNumber;

        }

        if (element.classList.contains('minus') && shoesNumber != 0) {
            shoesNumber--;
            number.innerHTML = shoesNumber;

        }
    })
});

cartBtn.addEventListener('click', function () {
    if(shoesNumber > 0) {
        basketAmount.classList.remove('hide')
    }

    basketAmount.innerHTML = shoesNumber;
    purchaseAmount.innerHTML = shoesNumber;
    finalPrice.innerHTML = "$" + (shoesNumber * 125.00);
})

basketIcon.addEventListener('click', function () {
    if(shoesNumber > 0) {
        cart.classList.toggle('hide');
    }

    



})

remove.addEventListener('click', function () {
    cart.classList.add('hide');
    basketAmount.classList.add('hide');
    shoesNumber = 0;
    purchaseAmount.innerHTML = 0;
    number.innerHTML = 0;
    finalPrice.innerHTML = "";
})