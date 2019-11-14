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
    var elem = document.querySelectorAll('.' + ele+' ul li');
    var selectedElement=document.querySelector('.' + ele+' li.selected');
    elem.forEach(ele=>{
        manageActiveClass(ele,selectedElement);
    });

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

if(itemBtnTwo.length)
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

if(footerFoldIcon.length)
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

var langList=document.querySelectorAll('.langDropdown .header__top__all__middle__liOptions li');

langList.forEach(function (element) {
    var selectedElement=document.querySelector('.langDropdown .header__top__all__middle__liOptions li.selected');

    manageActiveClass(element,selectedElement);


});

var WunderDropdownButton=document.querySelectorAll('.sectionReviewsDropdownButton .sectionWunder__dropdownButton__cont__list li');

WunderDropdownButton.forEach(function (element) {
    var selectedElement=document.querySelector('.sectionReviewsDropdownButton .sectionWunder__dropdownButton__cont__list li.selected');

    manageActiveClass(element,selectedElement);



});


function manageActiveClass(element,selectedElement){
    if(element!=null && typeof(element) != undefined)
        element.addEventListener('mouseenter',function (e) {
            if(!(element.classList.contains('selected'))){
                element.classList.add('active');
                selectedElement.classList.remove('active');
            }
            if(element.classList.contains('selected')){
                element.classList.add('active');
            }
        });
    if(element!=null && typeof(element) != undefined)
        element.addEventListener('mouseleave',function (e) {
            if(!(element.classList.contains('selected'))){
                element.classList.remove('active');
                selectedElement.classList.add('active');
            }
        })

}


// for(var i=0;i<langList[0].children.length;i++){
//     var elem=langList[0].children[i];
//     var selectedElement;
//     for(var j=0;j<langList[0].children.length;j++) {
//         if(langList[0].children[j].classList.contains('selected')){
//             selectedElement=langList[0].children[j];
//         }
//     }
//
//     elem.addEventListener('mouseenter',function (e) {
//         console.log('element',elem);
//
//         if(!(elem.classList.contains('selected'))){
//             elem.classList.add('active');
//             selectedElement.classList.remove('active');
//
//         }
//
//         if(elem.classList.contains('selected')){
//             elem.classList.add('active');
//         }
//
//
//
//     });
//
//
//     elem.addEventListener('mouseleave',function (e) {
//         if(!(elem.classList.contains('selected'))){
//             elem.classList.remove('active');
//             selectedElement.classList.add('active');
//         }
//     })
// }
// langList[0].children

