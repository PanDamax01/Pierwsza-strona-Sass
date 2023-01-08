const footerYear = document.querySelector('.footer__year')
const nav = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav-mobile__link')
const hamburgerColor = document.querySelector('.hamburger-inner')
const BtnAddText = document.querySelector('.info__box-btn')
const hiddenText = document.querySelector('.info__box-text-hidden')
const BtnRemoveText = document.querySelector('.info__box-btn-special')

const wave1 = document.getElementById('wave1')
const wave2 = document.getElementById('wave2')
const wave3 = document.getElementById('wave3')
const wave4 = document.getElementById('wave4')

//paralax
const text = document.getElementById('title')
const ballon1 = document.getElementById('ballon1')
const ballon2 = document.getElementById('🎈')
const rocks = document.getElementById('🧱')
const water = document.getElementById('💦')
const forest = document.getElementById('🌲')

window.addEventListener('scroll', function () {
	let value = window.scrollY

	text.style.top = 50 + value * -0.1 + '%'
	ballon1.style.top = value * -0.5 + 'px'
	ballon1.style.left = value * 0.8 + 'px'
	ballon2.style.top = value * -0.2 + 'px'
	ballon2.style.left = value * -2 + 'px'
	rocks.style.top = value * -0.12 + 'px'
	forest.style.top = value * 0.25 + 'px'

	wave1.style.backgroundPositionX = 400 + value * 4 + 'px'
	wave2.style.backgroundPositionX = 300 + value * -4 + 'px'
	wave3.style.backgroundPositionX = 200 + value * 2 + 'px'
	wave4.style.backgroundPositionX = 100 + value * -2 + 'px'
})

const handleNav = () => {
	nav.classList.toggle('nav--active')
	hamburgerColor.classList.toggle('special')

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
			hamburgerColor.classList.remove('special')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const addText = () => {
	hiddenText.classList.add('info__box--visit')
	BtnAddText.classList.add('info__box--hiden')
	BtnRemoveText.classList.remove('info__box--hiden')
}
const removeText = () => {
	hiddenText.classList.remove('info__box--visit')
	BtnRemoveText.classList.add('info__box--hiden')
	BtnAddText.classList.remove('info__box--hiden')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)
BtnAddText.addEventListener('click', addText)
BtnRemoveText.addEventListener('click', removeText)
