"use strict";

var liMenuClasses = ['headerFirstLi', 'headerSecLi', 'thirdLiOptions', 'sectionWunder__dropdownButton__cont', 'sectionReviewsDropdownButton'];
var headerBtnLiClasses = ['headerFirstSidebBtn', 'headerSecondSidebBtn', 'headerThirdSidebBtn'];
liMenuClasses.forEach(function (ele) {
    manageMenu(ele);
});
var counter = 0;

function manageMenu(ele) {
    var element = document.querySelector('.' + ele);

    if (element) {
        element.isClicked = false;

        element.onclick = function (e) {
            if (!element.isClicked && !element.children[2].classList.contains('hide')) {
                element.children[2].classList.remove('hide');
            } else {
                element.children[2].classList.toggle('hide');
            }

            if (element.children[2].classList.contains('hide')) {
                element.isClicked = false;
            } else {
                element.isClicked = true;
            }
        };
    }

    if (element) window.addEventListener('click', function (e) {
        if (e.target !== element && !element.contains(e.target)) {
            try {
                element.isClicked = false;
                element.children[2].classList.add('hide');
            } catch (e) {}
        }
    });
}

headerBtnLiClasses.forEach(function (ele) {
    var element = document.querySelector('.' + ele);
    if (element) element.onclick = function (e) {
        document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon__liOptions').classList.toggle('hide');

        if (ele === 'headerThirdSidebBtn') {
            document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon img').classList.toggle('rotateUp');
        }
    };
    if (element) window.addEventListener('click', function (e) {
        if (e.target !== element && !element.contains(e.target)) {
            document.querySelector('.' + ele + ' .header__Content__btns__btnContainer__downIcon__liOptions').classList.add('hide');

            if (element.classList.contains('headerThirdSidebBtn')) {
                if (document.querySelector('.' + ele + ' .thirdBtnOptions img').classList.contains('rotateUp')) {
                    document.querySelector('.' + ele + ' .thirdBtnOptions img').classList.remove('rotateUp');
                }
            }
        }
    });
});
var itemBtnTwo=document.querySelectorAll('.itemBtnTwo');

    itemBtnTwo.forEach(function (ele) {
    ele.onclick = function (e) {
        ele.children[1].children[1].classList.toggle('hide');
    };

    window.addEventListener('click', function (e) {
        if (e.target !== ele && !ele.contains(e.target)) {
            ele.children[1].children[1].classList.add('hide');
        }
    });
});
var nav = document.querySelector('.nav'),
    nav__close = document.querySelector('.nav__close'),
    burgerMenu = document.querySelector('.header__top__all__left__navMenu');

burgerMenu.onclick = function () {
    nav.classList.remove('moveNavAway');
};

nav__close.onclick = function () {
    nav.classList.add('moveNavAway');
};

window.addEventListener('click', function (e) {
    if (e.target !== nav && e.target !== burgerMenu && e.target !== burgerMenu.children[0]) {
        nav.classList.add('moveNavAway');
    }
});

window.onscroll = function (e) {
    var headerTop = document.querySelector('.header__top');

    if (window.pageYOffset >= 35) {
        headerTop.classList.add('headerBG');
    } else {
        headerTop.classList.remove('headerBG');
    }
};

var footerFoldIcon = document.querySelectorAll('.footer__allLink__col__top i');
footerFoldIcon.forEach(function (ele) {
    ele.addEventListener('click', function (e) {
        if (!e.target.classList.contains('open')) {
            e.target.parentElement.nextElementSibling.classList.remove('hidde');
            e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom = 0;
            e.target.classList.add('open');
            e.target.classList.remove('close');
            e.target.innerHTML = "-";
        } else if (e.target.classList.contains('open')) {
            e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom = '1.5rem';
            e.target.parentElement.nextElementSibling.classList.add('hidde');
            e.target.classList.remove('open');
            e.target.classList.add('close');
            e.target.innerHTML = "+";
        }
    });
});
var searchModal = document.querySelector('.searchModal'),
    searchIcon = document.querySelector('.searchIcon img'),
    searchBoxCloseBtn = document.querySelector('.searchModal__content__close'),
    searchBtn = document.querySelector('.searchBtn');
searchIcon.addEventListener('click', function () {
    searchModal.classList.remove('closeModal');
});
searchBoxCloseBtn.addEventListener('click', function () {
    searchModal.classList.add('closeModal');
});
searchBtn.addEventListener('click', function () {
    searchModal.classList.add('closeModal');
});