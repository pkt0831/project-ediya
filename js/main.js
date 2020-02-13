const nav = document.querySelector('.main-menu');
const menuOpenBtn = nav.querySelector('.main-menu__open-btn');
const menuCloseBtn = nav.querySelector('.main-menu__close-btn');
const menuPanel = nav.querySelector('.main-menu__menu-panel');
const menuItem = nav.querySelectorAll('.main-menu__menu-item');
const logoLink = document.querySelector('.logo__link');
const mainContainer = document.querySelector('.main__container');
const productItem = mainContainer.querySelectorAll('.product-list li');
const productItemLink = mainContainer.querySelectorAll('.product-item');
const productItemCloseBtn = mainContainer.querySelectorAll('.product-item__close-btn');

// 렌더 함수
function render() {
    for (let i = 0; i < productItem.length; i++) {
        let item = productItem[i];
        let counter = 300 * i;
        let delayCounter = 1300 + counter + 'ms';
        item.style.animationDelay = delayCounter;
    }
    menuOpenBtn.addEventListener('click', openMenuPanel);
    menuCloseBtn.addEventListener('click', closeMenuPanel);

    for (let i = 0; i < productItem.length; i++) {
        let item = productItem[i];
        item.addEventListener('click', ItemOn);
    }
    for (let i = 0; i < productItemCloseBtn.length; i++) {
        let product_close_btn = productItemCloseBtn[i];
        product_close_btn.addEventListener('click', ItemOff);
    }
}


//메뉴버튼을 클릭할시 메뉴패널을 보여줌, 그 안 요소들 포커스 주고 밖에 요소들 포커스 없애기
function openMenuPanel(e) {
    menuPanel.style.transition = 'all 0.7s';
    menuPanel.setAttribute('aria-hidden','false');
    nav.classList.add('is-open');
    logoLink.setAttribute('tabindex', '-1');
    menuOpenBtn.setAttribute('tabindex', '-1');
    for (let i = 0; i < productItemLink.length; i++) {
        let product = productItemLink[i];
        product.setAttribute('tabindex', '-1');
    }
    for (let i = 0; i < menuItem.length; i++) {
        let menuLink = menuItem[i];
        console.log(menuLink);
        menuLink.setAttribute('tabindex', '1');
    }
    menuCloseBtn.setAttribute('tabindex', '1');
}

// 메인메뉴창 닫기버튼을 누르면 창이 닫힘
function closeMenuPanel(e) {
    menuPanel.style.transition = 'all 0.7s';
    menuPanel.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < menuItem.length; i++) {
        let menuLink = menuItem[i];
        console.log(menuLink);
        menuLink.setAttribute('tabindex', '-1');
    }
    menuCloseBtn.setAttribute('tabindex', '-1');
    logoLink.setAttribute('tabindex', '1');
    menuOpenBtn.setAttribute('tabindex', '1');
    for (let i = 0; i < productItemLink.length; i++) {
        let product = productItemLink[i];
        product.setAttribute('tabindex', '0');
    }
    nav.classList.remove('is-open');
}

// 음료를 클릭할때 상세설명창이 올라옴
function ItemOn(e) {
    e.preventDefault();
    e.stopPropagation();
    let _this = e.target;
    let _parent = _this.closest('li');
    let _container = _parent.querySelector('div');
    _container.classList.add('fade-in');
}

// 상세설명창 닫기 버튼을 누르면 상세설명창이 사라짐
function ItemOff(e) {
    let _this = e.target;
    let _container = _this.closest('div');
    _container.classList.remove('fade-in');
    _container.classList.add('fade-out');
    e.stopPropagation();
    let itemDelay = window.setTimeout(function() {
        _container.classList.remove('fade-out');
    }, 1000);
}

// 이벤트 연결 [로드, 리사이즈]
window.addEventListener('load', render);
window.addEventListener('resize', render);