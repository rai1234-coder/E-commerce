// ----------product-detail--------

const productImg = document.getElementById('productImg');
const Smallimg = document.getElementsByClassName('small-img');

Smallimg[0].onclick = function () {
    productImg.src = Smallimg[0].src;
}

Smallimg[1].onclick = function () {
    productImg.src = Smallimg[1].src;
}

Smallimg[2].onclick = function () {
    productImg.src = Smallimg[2].src;
}

Smallimg[3].onclick = function () {
    productImg.src = Smallimg[3].src;
}
