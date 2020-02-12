const nav = document.querySelector('.main-menu');
const menuOpenBtn = nav.querySelector('.main-menu__open-btn');
const menuCloseBtn = nav.querySelector('.main-menu__close-btn');
const menuPanel = nav.querySelector('.main-menu__menu-panel');

const mainContainer = document.querySelector('.main__container');
const productItem = mainContainer.querySelectorAll('.product-list li');
const productItemCloseBtn = mainContainer.querySelectorAll('.product-item__close-btn');




// 렌더 함수
function render() {

    //처음에 등장하는 productItem
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
    // productItemCloseBtn.addEventListener('click', ItemOff);
}


//메뉴버튼을 클릭할시 메뉴패널을 보여줌
function openMenuPanel(e) {

    menuPanel.style.transition = 'all 0.7s';

    // _this.parentNode.classList.add('is-open')
    nav.classList.add('is-open');

}

// 메인메뉴창 닫기버튼을 누르면 창이 닫힘
function closeMenuPanel(e) {
    // console.log(33);
    
    // let mainMenu = nav.querySelector('.main_menu')
    // mainMenu.classList.remove('is-open')
    menuPanel.style.transition = 'all 0.7s';
    nav.classList.remove('is-open');
}

// 음료를 클릭할때 상세설명창이 올라옴
function ItemOn(e) {
  let _this = e.target;
  let _parent = _this.closest('li');
  _parent.classList.add('is-on');
}

// 상세설명창 닫기 버튼을 누르면 상세설명창이 사라짐
function ItemOff(e) {
    let _this = e.target;
    let _parent = _this.closest('li');
    e.stopPropagation();
    _parent.classList.remove('is-on'); 
}



// 이벤트 연결 [로드, 리사이즈]
window.addEventListener('load', render);
window.addEventListener('resize', render);