window.onscroll = () =>{
    const nav = document.querySelector('nav')
    if(window.pageYOffset > nav.offsetTop){
        nav.classList.remove('absolute')
        nav.classList.add('fixed')
        nav.classList.add('bg-[#fd738183]')
        nav.classList.add('backdrop-blur-lg')
    }else{
        nav.classList.add('absolute')
        nav.classList.remove('fixed')
        nav.classList.remove('bg-[#fd738183]')
        nav.classList.remove('backdrop-blur-lg')
    }
}

const hamburgerMenu = document.getElementById('hamburger-menu');
const navLink = document.getElementById('navbar-menu');
const dropDown = document.querySelectorAll('.drop-down')
const imageDropDown = document.querySelectorAll('.imageDropdown')

imageDropDown.forEach((image) =>{
    if(window.innerWidth >= 1024 || window.innerWidth >=768){
        image.src = './assets/images/icon-arrow-light.svg';
    }else if(window.innerWidth >= 640){
        image.src = './assets/images/icon-arrow-dark.svg';
    }
})

dropDown.forEach((value) =>{
    const dropDownElement = document.querySelectorAll('.dropDownElement')
    const dropDownChild = value.children[1];
    const imageDropDown = value.children[0].children[0];
    const imageDropDowns = document.querySelectorAll('.imageDropdown')

    value.addEventListener('click', () => {
        dropDownElement.forEach((element) =>{
            if(dropDownChild.classList.contains('hidden')){
                element.classList.add('hidden');
                element.classList.add('flex');

            }
        })
        imageDropDowns.forEach((elem) =>{
            if(elem.classList.contains('rotate-180')){
                elem.classList.add('rotate-0')
            }
        })
        dropDownChild.classList.toggle('hidden');
        imageDropDown.classList.toggle('rotate-180');
    })
})

hamburgerMenu.addEventListener('click', () =>{
    // console.log(navLink)
    if(hamburgerMenu.attributes[0].nodeValue == './assets/images/icon-hamburger.svg'){
        hamburgerMenu.src = './assets/images/icon-close.svg';
        navLink.classList.remove('hidden')
        navLink.classList.remove('h-0')
        navLink.classList.remove('py-0')
        navLink.classList.add('h-[70vh]')
        navLink.classList.add('py-7')
    }else{
        hamburgerMenu.src = './assets/images/icon-hamburger.svg';
        navLink.classList.add('hidden')
        navLink.classList.add('h-0')
        navLink.classList.add('py-0')
        navLink.classList.remove('h-[70vh]')
        navLink.classList.remove('py-7')
    }
})