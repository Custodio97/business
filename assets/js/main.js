/*Navbar*/
function ToggleNavbar() {
    const $nav=document.querySelector('.nav ul')
    const $toggle = document.querySelector('.toggle')
    const $icon = document.querySelector('.fa-bars')
    
    $toggle.addEventListener('click', () => {
        if ($icon.classList.contains('fa-bars')) {
            $icon.classList.replace('fa-bars','fa-times')
        } else {
            $icon.classList.replace('fa-times', 'fa-bars')
        }
        $nav.classList.toggle('active')
    })
    
}
ToggleNavbar()

/*Animation*/

function scrollAnimation() {
    const elementScroll = document.querySelectorAll('.js-scroll')
    const animationScroll = () => {
        elementScroll.forEach((element) => {
            const clinetHeight = window.innerHeight * 0.6
            const elementTop = element.getBoundingClientRect().top
            const isElementVisible = (elementTop - clinetHeight) < 0

            if (isElementVisible) {
                element.classList.add('active')
            }
        })
    }
    
    window.addEventListener('scroll',animationScroll)
    
}
scrollAnimation()


/*Show item or hide*/
function showItem() {
    const $btn1 = document.querySelector('#btn-1')
    const $btn2=document.querySelector('#btn-2')
    const $btn3 = document.querySelector('#btn-3')
    const text1 = document.querySelector('.text-1')
    const text2 = document.querySelector('.text-2')
    const text3 = document.querySelector('.text-3')
    $btn1.addEventListener('click', () => {
        text1.classList.add('active')
        if (text1.classList.contains('active')) {
            text2.classList.remove('active')
            text3.classList.remove('active')
        }
    })
    $btn2.addEventListener('click', () => {
        text2.classList.add('active')
        if (text2.classList.contains('active')) {
            text1.classList.remove('active')
            text3.classList.remove('active')
        }
    })
    $btn3.addEventListener('click', () => {
        text3.classList.add('active')
        if (text3.classList.contains('active')) {
            text2.classList.remove('active')
            text1.classList.remove('active')
        }
    })
}
showItem()