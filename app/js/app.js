

 document.addEventListener('DOMContentLoaded', () => {

	function openHood () {
		let car = document.querySelector(".services-car")
		let hood = document.querySelector(".services-car__hood")
		let clientHeight = document.documentElement.clientHeight

		function getPositionCar () {

			if (car.getBoundingClientRect().bottom < clientHeight) {
				hood.classList.add("services-car__hood--open")
				// document.removeEventListener("scroll", getPositionCar)
			} else if (car.getBoundingClientRect().bottom < 0) {
				hood.classList.remove("services-car__hood--open")
			}
			else {
				hood.classList.remove("services-car__hood--open")
			}

		}
		document.addEventListener("scroll", getPositionCar, {passive: true})
	}
	openHood ()

	function gallery() {
		let galleryList = document.querySelector(".gallery-list")
		let galleryWrapper = document.querySelector(".gallery__inner")
		let rightArrow = document.querySelector(".gallery-list__arrow--right")
		let leftArrow = document.querySelector(".gallery-list__arrow--left")
		let galleryItems = document.querySelectorAll(".gallery-list__item")
		let galleryWrapperWidth = galleryWrapper.getBoundingClientRect().width
		let maxWidthRowGallery = 0
		let rows = document.querySelectorAll(".gallery-list__row")
		function setGalleryWrapperWidthFull () {
			maxWidthRowGallery = 0
			for (let i = 0; i < rows.length; i++) {
				if (rows[i].getBoundingClientRect().width > maxWidthRowGallery) {
					maxWidthRowGallery += rows[i].getBoundingClientRect().width
				}
			}
		}
		let stepWidth = galleryWrapperWidth
		setStepWidth ()
		function setStepWidth () {
			if (document.documentElement.clientWidth < 480) {
				stepWidth = galleryWrapperWidth / 1
			} else if (document.documentElement.clientWidth < 768) {
				stepWidth = galleryWrapperWidth / 2
			} else {
				stepWidth = galleryWrapperWidth / 3
			}
		}

		let galleryListPosition = 0
		function updateGalleryParams() {
			galleryList.style.transform = `translateX(${0}px)`
			galleryWrapperWidth = galleryWrapper.getBoundingClientRect().width
			setStepWidth ()
			galleryListPosition = 0
			
		}
		function setImgSize(img) {
			img.style.width = stepWidth + 'px'
			img.style.height = stepWidth + 'px'
		}

			for(let i = 0; i < galleryItems.length; i++) {
				setImgSize(galleryItems[i])
			}

		setGalleryWrapperWidthFull ()
		rightArrow.addEventListener("click", function () {
			if (Math.abs(galleryListPosition) >= (maxWidthRowGallery - galleryWrapperWidth)) {
				return
			} else {
				galleryListPosition -= stepWidth
				galleryList.style.transform = `translateX(${galleryListPosition}px)`
			}

		})
		leftArrow.addEventListener("click", function () {
			if (galleryListPosition + stepWidth > 0 ) {
				return
			} else {
				galleryListPosition += stepWidth
				galleryList.style.transform = `translateX(${galleryListPosition}px)`
			}

		})

		function checkChangeWidthGalleryWidth () {
			if (galleryWrapperWidth === galleryWrapper.getBoundingClientRect().width) {
				return false
			} else {
				return true
			}

		}
		window.addEventListener('resize', function () {
			if (checkChangeWidthGalleryWidth()) {
				updateGalleryParams()
				for(let i = 0; i < galleryItems.length; i++) {
					setImgSize(galleryItems[i])
				}
				setGalleryWrapperWidthFull ()
			} 
			
		})
		
	}
	gallery()


	function mobMenu () {
		let menu = document.querySelector(".mob-menu")
		let menuInner = document.querySelector(".mob-menu__inner")
		let btn = document.querySelector(".mob-menu-open")
		btn.addEventListener("click", function () {
			menu.classList.add("mob-menu--open")
			setTimeout(function () {
				menuInner.classList.add("mob-menu__inner--open")
			}, 100)

		})
		function closeMenu () {
			menuInner.classList.remove("mob-menu__inner--open")
			setTimeout(function () {
				menu.classList.remove("mob-menu--open")
			}, 400)
			
		}

		menu.addEventListener("click", function (e) {
			if (e.target.classList.contains("mob-menu__overlay")) {
				closeMenu()
			} else if (e.target.classList.contains("mob-menu__close")) {
				closeMenu()
			} else if (e.target.classList.contains("menu__link")) {
				closeMenu()
			}
		})
	}

	mobMenu ()



	function checkSlider () {
		let sliderInited = false
		let slider = document.querySelector(".services-list")
		window.addEventListener('resize', function () {
			if (!slider.classList.contains("slick-initialized") && !sliderInited) {
				initSlider ()
				sliderInited = true
			}
		})
	}

	

	function initSlider () {
		$('.services-list').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			// arrows: true,
			dots: true,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 2000,
			mobileFirst: true,
			// prevArrow: '<button class="services-list__arrow--left services-list__arrow arrow arrow--left"><span class="arrow__line"></span><span class="arrow__line-top"></span><span class="arrow__line-bottom"></span></button>',
			// nextArrow: '<button class="services-list__arrow--right services-list__arrow arrow arrow--right"><span class="arrow__line"></span><span class="arrow__line-top"></span><span class="arrow__line-bottom"></span></button>',
			dotsClass: "services-list__dots slick-dots",
			responsive: [
				{
				  breakpoint: 768,
				  settings: "unslick"
				}
			  ]
		});
		checkSlider ()
	}
	initSlider ()

	function sliderCerificates () {
		$('.certificates__list').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			// arrows: true,
			dots: true,
			adaptiveHeight: true,
			autoplay: false,
			autoplaySpeed: 2000,
			mobileFirst: true,
			prevArrow: '<button class="certificates__arrow--left certificates__arrow arrow arrow--left"><span class="arrow__line"></span><span class="arrow__line-top"></span><span class="arrow__line-bottom"></span></button>',
			nextArrow: '<button class="certificates__arrow--right certificates__arrow arrow arrow--right"><span class="arrow__line"></span><span class="arrow__line-top"></span><span class="arrow__line-bottom"></span></button>',
			dotsClass: "certificates__dots slick-dots",
		})
	}
	sliderCerificates ()


	function indictaros () {
		let items = document.querySelectorAll(".indicators__item")
		

		for (let i = 0; i <items.length; i++) {
			counter (items[i])
		}
		
		function counter (block) {
			let blockValue = block.querySelector(".indicators__value")
			let blockImg = block.querySelector(".indicators__img")
			let blockText = block.querySelector(".indicators__text")
			let blockRail = block.querySelector(".indicators__rail")

			let currentValue = 0
			let endValue = +blockValue.dataset.value
			let step = 1
			let intervalValue = 50
			let counterDuration = intervalValue * +blockValue.dataset.value

			blockImg.animate([
				{transform: 'rotate(0)'},
				{transform: `rotate(${counterDuration}deg)`}
			], {
				duration: counterDuration,
				easing: "ease-in-out",
				fill: "forwards"
			})

			blockRail.animate([
				{width: "0"},
				{width: "100%"}
			],{
				duration: counterDuration,
				fill: "forwards"
			})

			blockText.animate([
				{opacity: 0},
				{opacity: 1}
			],{
				duration: 200,
				delay: counterDuration,
				fill: "forwards"
			})


			let interval = setInterval(function () {

				
				if (currentValue < endValue) {
					currentValue += step
					blockValue.innerHTML = currentValue
				} else {
					clearInterval(interval)
				}
			}, intervalValue)
		}

	}

	function checkPositionIndicators () {
		let block = document.querySelector(".indicators")
		function getCoord () {
			if (block.getBoundingClientRect().top < document.documentElement.clientHeight) {
				indictaros ()
				document.removeEventListener("scroll", getCoord)
			}
		}
		document.addEventListener("scroll", getCoord, {passive: true})
		
	}
	checkPositionIndicators ()

	

	var linkNav = document.querySelectorAll('[href^="#"]'),
	V = 0.2;
	for (var i = 0; i < linkNav.length; i++) {
		linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
			e.preventDefault(); //отменяем стандартное поведение
			var w = window.pageYOffset,  // производим прокрутка прокрутка
			hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
			t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
			start = null;
			requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
			function step(time) {
				if (start === null) start = time;
				var progress = time - start,
				r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
				window.scrollTo(0,r);
				if (r != w + t) {
					requestAnimationFrame(step)
				} else {
					location.hash = hash  // URL с хэшем
				}
			}
		}, false);
	}
			 

})