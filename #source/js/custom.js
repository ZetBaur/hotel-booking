
$(document).ready(function () {

	$('.btn').on('click', function () {
		console.log(5);

	});
	// ===========================Tippy-Init============================================================================================================================================================================================================================================================================================
	// tippy('.tippy', {
	// 	content: "I'm a Tippy tooltip!",
	// });

	// =====================FullPage-Init=========================================================================================================================================================================================================================================================

	// $('#fullpage').fullpage({
	// 	anchors: ['block1', 'block2', 'block3', 'block4'],
	// 	menu: 'promo__menu-list',
	// 	css3: true,
	// 	scrollingSpeed: 800
	// });

	// =====================Filter-Isotope-Init=========================================================================================================================================================================================================================================================
	// $('.grid').isotope({
	// 	itemSelector: '.grid-item',
	// 	layoutMode: 'fitRows'

	// });

	// $('.grid-button').on('click', function () {
	// 	$('.grid-button').removeClass('active');
	// 	$(this).addClass('active');

	// 	var selector = $(this).attr('data-filter');

	// 	$('.grid').isotope({
	// 		filter: selector
	// 	});
	// 	return false

	// });



	// =======================================Slick-Slider-Init===============================================================================================================================================================================================================================================

	// $('.slider').slick({
	// 	// dots: true,
	// 	// infinite: false,
	// 	// speed: 300,
	// 	// slidesToShow: 4,
	// 	// slidesToScroll: 4,
	// 	// autoplay: true,
	// 	// autoplaySpeed: 2000,
	// 	// fade: true,
	// 	// cssEase: 'linear',
	// 	// arrows: false,
	// 	// prevArrow: '<button type="button" class="slick-prev">Previous</button>',
	// 	// nextArrow: '<button type="button" class="slick-next">Next</button>',
	// 	// responsive: [
	// 	// 	{
	// 	// 		breakpoint: 1024,
	// 	// 		settings: {
	// 	// 			slidesToShow: 3,
	// 	// 			slidesToScroll: 3,
	// 	// 			infinite: true,
	// 	// 			dots: true
	// 	// 		}
	// 	// 	},
	// 	// 	{
	// 	// 		breakpoint: 600,
	// 	// 		settings: {
	// 	// 			slidesToShow: 2,
	// 	// 			slidesToScroll: 2
	// 	// 		}
	// 	// 	},
	// 	// 	{
	// 	// 		breakpoint: 480,
	// 	// 		settings: {
	// 	// 			slidesToShow: 1,
	// 	// 			slidesToScroll: 1
	// 	// 		}
	// 	// 	}
	// 	// 	// You can unslick at a given breakpoint now by adding:
	// 	// 	// settings: "unslick"
	// 	// 	// instead of a settings object
	// 	// ]
	// });



	// =====================SCROLL-TO-TOP==========================================================================================================================================================================================================================================================

	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 900) {
	// 		$('.pageup').fadeIn();
	// 	} else {
	// 		$('.pageup').fadeOut();

	// 	}
	// });

	// $("a[href^='#']").click(function () {
	// 	var _href = $(this).attr("href");
	// 	$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
	// 	return false;
	// });

	// ================MENU-and-BURGER=============================================================================================================================================================================================================================================================

	// $('.burger').on('click', function () {
	// 	$('.menu').toggleClass('open');
	// });

	// $('.menu-item').on('click', function () {
	// 	if ($('.menu').hasClass('open')) {
	// 		$('.menu').removeClass('open');
	// 	}
	// });

	// $('html, body').on('click', function (e) {
	// 	if ($('.menu').hasClass('open') && !$(e.target).is('.menu, .menu-item, .burger')) {
	// 		$('.menu').removeClass('open');
	// 	}
	// });



	//============Andik-Popups====================================================================================================================================================================================================================================================================

	// let popup_link = document.querySelectorAll('._popup-link');
	// let popups = document.querySelectorAll('.popup');
	// for (let index = 0; index < popup_link.length; index++) {
	// 	const el = popup_link[index];
	// 	el.addEventListener('click', function (e) {
	// 		if (unlock) {
	// 			let item = el.getAttribute('href').replace('#', '');
	// 			let video = el.getAttribute('data-video');
	// 			popup_open(item, video);
	// 		}
	// 		e.preventDefault();
	// 	})
	// }
	// for (let index = 0; index < popups.length; index++) {
	// 	const popup = popups[index];
	// 	popup.addEventListener("click", function (e) {
	// 		if (!e.target.closest('.popup__body')) {
	// 			popup_close(e.target.closest('.popup'));
	// 		}
	// 	});
	// }
	// function popup_open(item, video = '') {
	// 	let activePopup = document.querySelectorAll('.popup._active');
	// 	if (activePopup.length > 0) {
	// 		popup_close('', false);
	// 	}
	// 	let curent_popup = document.querySelector('.popup_' + item);
	// 	if (curent_popup && unlock) {
	// 		if (video != '' && video != null) {
	// 			let popup_video = document.querySelector('.popup_video');
	// 			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	// 		}
	// 		if (!document.querySelector('.menu__body._active')) {
	// 			body_lock_add(500);
	// 		}
	// 		curent_popup.classList.add('_active');
	// 		history.pushState('', '', '#' + item);
	// 	}
	// }
	// function popup_close(item, bodyUnlock = true) {
	// 	if (unlock) {
	// 		if (!item) {
	// 			for (let index = 0; index < popups.length; index++) {
	// 				const popup = popups[index];
	// 				let video = popup.querySelector('.popup__video');
	// 				if (video) {
	// 					video.innerHTML = '';
	// 				}
	// 				popup.classList.remove('_active');
	// 			}
	// 		} else {
	// 			let video = item.querySelector('.popup__video');
	// 			if (video) {
	// 				video.innerHTML = '';
	// 			}
	// 			item.classList.remove('_active');
	// 		}
	// 		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
	// 			body_lock_remove(500);
	// 		}
	// 		history.pushState('', '', window.location.href.split('#')[0]);
	// 	}
	// }
	// let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
	// if (popup_close_icon) {
	// 	for (let index = 0; index < popup_close_icon.length; index++) {
	// 		const el = popup_close_icon[index];
	// 		el.addEventListener('click', function () {
	// 			popup_close(el.closest('.popup'));
	// 		})
	// 	}
	// }
	// document.addEventListener('keydown', function (e) {
	// 	if (e.code === 'Escape') {
	// 		popup_close();
	// 	}
	// });



	//====================TABS====================================================================================================================================================================================================================================================================

	// let tabs = document.querySelectorAll("._tabs");
	// for (let index = 0; index < tabs.length; index++) {
	// 	let tab = tabs[index];
	// 	let tabs_items = tab.querySelectorAll("._tabs-item");
	// 	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	// 	for (let index = 0; index < tabs_items.length; index++) {
	// 		let tabs_item = tabs_items[index];
	// 		tabs_item.addEventListener("click", function (e) {
	// 			for (let index = 0; index < tabs_items.length; index++) {
	// 				let tabs_item = tabs_items[index];
	// 				tabs_item.classList.remove('_active');
	// 				tabs_blocks[index].classList.remove('_active');
	// 			}
	// 			tabs_item.classList.add('_active');
	// 			tabs_blocks[index].classList.add('_active');
	// 			e.preventDefault();
	// 		});
	// 	}
	// }



	//====================IBG=====================================================================================================================================================================================================================================================================

	// function ibg() {
	// 	$.each($('.ibg'), function (index, val) {
	// 		if ($(this).find('img').length > 0) {
	// 			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
	// 		}
	// 	});
	// }
	// ibg();

	//====================Dynamic-adaptive========================================================================================================================================================================================================================================================

	// Dynamic Adapt v.1
	// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
	// e.x. data-da=".item,992,2"
	// Andrikanych Yevhen 2020
	// https://www.youtube.com/c/freelancerlifestyle

	"use strict";

	function DynamicAdapt(type) {
		this.type = type;
	}

	DynamicAdapt.prototype.init = function () {
		const _this = this;
		// массив объектов
		this.оbjects = [];
		this.daClassname = "_dynamic_adapt_";
		// массив DOM-элементов
		this.nodes = document.querySelectorAll("[data-da]");

		// наполнение оbjects объктами
		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			const data = node.dataset.da.trim();
			const dataArray = data.split(",");
			const оbject = {};
			оbject.element = node;
			оbject.parent = node.parentNode;
			оbject.destination = document.querySelector(dataArray[0].trim());
			оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
			оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.оbjects.push(оbject);
		}

		this.arraySort(this.оbjects);

		// массив уникальных медиа-запросов
		this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
			return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
		}, this);
		this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
			return Array.prototype.indexOf.call(self, item) === index;
		});

		// навешивание слушателя на медиа-запрос
		// и вызов обработчика при первом запуске
		for (let i = 0; i < this.mediaQueries.length; i++) {
			const media = this.mediaQueries[i];
			const mediaSplit = String.prototype.split.call(media, ',');
			const matchMedia = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];

			// массив объектов с подходящим брейкпоинтом
			const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
				return item.breakpoint === mediaBreakpoint;
			});
			matchMedia.addListener(function () {
				_this.mediaHandler(matchMedia, оbjectsFilter);
			});
			this.mediaHandler(matchMedia, оbjectsFilter);
		}
	};

	DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
		if (matchMedia.matches) {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				оbject.index = this.indexInParent(оbject.parent, оbject.element);
				this.moveTo(оbject.place, оbject.element, оbject.destination);
			}
		} else {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				if (оbject.element.classList.contains(this.daClassname)) {
					this.moveBack(оbject.parent, оbject.element, оbject.index);
				}
			}
		}
	};

	// Функция перемещения
	DynamicAdapt.prototype.moveTo = function (place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.insertAdjacentElement('beforeend', element);
			return;
		}
		if (place === 'first') {
			destination.insertAdjacentElement('afterbegin', element);
			return;
		}
		destination.children[place].insertAdjacentElement('beforebegin', element);
	}

	// Функция возврата
	DynamicAdapt.prototype.moveBack = function (parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].insertAdjacentElement('beforebegin', element);
		} else {
			parent.insertAdjacentElement('beforeend', element);
		}
	}

	// Функция получения индекса внутри родителя
	DynamicAdapt.prototype.indexInParent = function (parent, element) {
		const array = Array.prototype.slice.call(parent.children);
		return Array.prototype.indexOf.call(array, element);
	};

	// Функция сортировки массива по breakpoint и place 
	// по возрастанию для this.type = min
	// по убыванию для this.type = max
	DynamicAdapt.prototype.arraySort = function (arr) {
		if (this.type === "min") {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return -1;
					}

					if (a.place === "last" || b.place === "first") {
						return 1;
					}

					return a.place - b.place;
				}

				return a.breakpoint - b.breakpoint;
			});
		} else {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return 1;
					}

					if (a.place === "last" || b.place === "first") {
						return -1;
					}

					return b.place - a.place;
				}

				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	};

	const da = new DynamicAdapt("max");
	da.init();



	// ====================Checkbox-and-Radio-Buttons-Style========================================================================================================================================================================================================================================

	//CHECKBOX
	$.each($('.checkbox'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function (event) {
		if ($(this).hasClass('active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');

		return false;
	});

	//RADIO
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});


	//=========================Search-area-get-visible============================================================================================================================================================================================================================================

	$('.search-btn').on('mouseover', function (e) {
		e.preventDefault();
		$('.search-input').addClass('active');
	});
	$(document).click(function (e) {
		if (!$(e.target).is('.search-btn, .search-input input')) {
			$('.search-input').removeClass('active');
		}
	});

	// ===========================Spollers=========================================================================================================================================================================================================================================================

	let spollers = document.querySelectorAll("._spoller");
	let spollersGo = true;
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			spoller.addEventListener("click", function (e) {
				if (spollersGo) {
					spollersGo = false;
					if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
						return false;
					}
					if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
						return false;
					}
					if (spoller.closest('._spollers').classList.contains('_one')) {
						let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
						for (let i = 0; i < curent_spollers.length; i++) {
							let el = curent_spollers[i];
							if (el != spoller) {
								el.classList.remove('_active');
								_slideUp(el.nextElementSibling);
							}
						}
					}
					spoller.classList.toggle('_active');
					_slideToggle(spoller.nextElementSibling);

					setTimeout(function () {
						spollersGo = true;
					}, 500);
				}
			});
		}
	}


	// ================Scroll==========================================================================================================================================================================================================================================================================================================

	let scr_body = document.querySelector('body');
	let scr_blocks = document.querySelectorAll('._scr-sector');
	let scr_items = document.querySelectorAll('._scr-item');
	let scr_fix_block = document.querySelectorAll('._side-wrapper');
	let scr_min_height = 750;

	let scrolling = true;
	let scrolling_full = true;

	let scrollDirection = 0;

	//ScrollOnScroll
	window.addEventListener('scroll', scroll_scroll);
	function scroll_scroll() {
		//scr_body.setAttribute('data-scroll', pageYOffset);
		let src_value = pageYOffset;
		let header = document.querySelector('header.header');
		if (header !== null) {
			if (src_value > 10) {
				header.classList.add('_scroll');
			} else {
				header.classList.remove('_scroll');
			}
		}
		if (scr_blocks.length > 0) {
			for (let index = 0; index < scr_blocks.length; index++) {
				let block = scr_blocks[index];
				let block_offset = offset(block).top;
				let block_height = block.offsetHeight;

				if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
					block.classList.add('_scr-sector_active');
				} else {
					if (block.classList.contains('_scr-sector_active')) {
						block.classList.remove('_scr-sector_active');
					}
				}
				if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
					if (!block.classList.contains('_scr-sector_current')) {
						block.classList.add('_scr-sector_current');
					}
				} else {
					if (block.classList.contains('_scr-sector_current')) {
						block.classList.remove('_scr-sector_current');
					}
				}
			}
		}
		if (scr_items.length > 0) {
			for (let index = 0; index < scr_items.length; index++) {
				let scr_item = scr_items[index];
				let scr_item_offset = offset(scr_item).top;
				let scr_item_height = scr_item.offsetHeight;


				let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
				if (window.innerHeight > scr_item_height) {
					scr_item_point = window.innerHeight - scr_item_height / 3;
				}

				if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
					scr_item.classList.add('_active');
					scroll_load_item(scr_item);
				} else {
					scr_item.classList.remove('_active');
				}
				if (((src_value > scr_item_offset - window.innerHeight))) {
					if (scr_item.querySelectorAll('._lazy').length > 0) {
						scroll_lazy(scr_item);
					}
				}
			}
		}

		if (scr_fix_block.length > 0) {
			fix_block(scr_fix_block, src_value);
		}
		let custom_scroll_line = document.querySelector('._custom-scroll__line');
		if (custom_scroll_line) {
			let window_height = window.innerHeight;
			let content_height = document.querySelector('.wrapper').offsetHeight;
			let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
			let custom_scroll_line_height = custom_scroll_line.offsetHeight;
			custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
		}

		if (src_value > scrollDirection) {
			// downscroll code
		} else {
			// upscroll code
		}
		scrollDirection = src_value <= 0 ? 0 : src_value;
	}
	setTimeout(function () {
		//document.addEventListener("DOMContentLoaded", scroll_scroll);
		scroll_scroll();
	}, 100);

	function scroll_lazy(scr_item) {
		let lazy_src = scr_item.querySelectorAll('*[data-src]');
		if (lazy_src.length > 0) {
			for (let index = 0; index < lazy_src.length; index++) {
				const el = lazy_src[index];
				if (!el.classList.contains('_loaded')) {
					el.setAttribute('src', el.getAttribute('data-src'));
					el.classList.add('_loaded');
				}
			}
		}
		let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
		if (lazy_srcset.length > 0) {
			for (let index = 0; index < lazy_srcset.length; index++) {
				const el = lazy_srcset[index];
				if (!el.classList.contains('_loaded')) {
					el.setAttribute('srcset', el.getAttribute('data-srcset'));
					el.classList.add('_loaded');
				}
			}
		}
	}

	function scroll_load_item(scr_item) {
		if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
			let map_item = document.getElementById('map');
			if (map_item) {
				scr_item.classList.add('_loaded-map');
				map();
			}
		}
	}

	//FullScreenScroll
	if (scr_blocks.length > 0 && !isMobile.any()) {
		disableScroll();
		window.addEventListener('wheel', full_scroll);
	}
	function full_scroll(e) {
		let viewport_height = window.innerHeight;
		if (viewport_height >= scr_min_height) {
			if (scrolling_full) {
				// ВЫЧИСЛИТЬ!!!
				let current_scroll = pageYOffset;//parseInt(scr_body.getAttribute('data-scroll'));
				//
				let current_block = document.querySelector('._scr-sector._scr-sector_current');
				let current_block_pos = offset(current_block).top;
				let current_block_height = current_block.offsetHeight;
				let current_block_next = current_block.nextElementSibling;
				let current_block_prev = current_block.previousElementSibling;
				let block_pos;
				if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
					if (current_block_prev) {
						let current_block_prev_height = current_block_prev.offsetHeight;
						block_pos = offset(current_block_prev).top;
						if (current_block_height <= viewport_height) {
							if (current_block_prev_height >= viewport_height) {
								block_pos = block_pos + (current_block_prev_height - viewport_height);
								full_scroll_to_sector(block_pos);
							}
						} else {
							enableScroll();
							if (current_scroll <= current_block_pos) {
								full_scroll_to_sector(block_pos);
							}
						}
					} else {
						full_scroll_pagestart();
					}
				} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
					if (current_block_next) {
						block_pos = offset(current_block_next).top;
						if (current_block_height <= viewport_height) {
							full_scroll_to_sector(block_pos);
						} else {
							enableScroll();
							if (current_scroll >= block_pos - viewport_height) {
								full_scroll_to_sector(block_pos);
							}
						}
					} else {
						full_scroll_pageend();
					}
				}
			} else {
				disableScroll();
			}
		} else {
			enableScroll();
		}
	}
	function full_scroll_to_sector(pos) {
		disableScroll();
		scrolling_full = false;
		_goto(pos, 800);

		let scr_pause = 500;
		if (navigator.appVersion.indexOf("Mac") != -1) {
			scr_pause = 1000;
		};
		setTimeout(function () {
			scrolling_full = true;
		}, scr_pause);
	}
	function full_scroll_pagestart() { }
	function full_scroll_pageend() { }

	//ScrollOnClick (Navigation)
	let link = document.querySelectorAll('._goto-block');
	if (link) {
		let blocks = [];
		for (let index = 0; index < link.length; index++) {
			let el = link[index];
			let block_name = el.getAttribute('href').replace('#', '');
			if (block_name != '' && !~blocks.indexOf(block_name)) {
				blocks.push(block_name);
			}
			el.addEventListener('click', function (e) {
				if (document.querySelector('.menu__body._active')) {
					menu_close();
					body_lock_remove(500);
				}
				let target_block_class = el.getAttribute('href').replace('#', '');
				let target_block = document.querySelector('.' + target_block_class);
				_goto(target_block, 300);
				e.preventDefault();
			})
		}

		window.addEventListener('scroll', function (el) {
			let old_current_link = document.querySelectorAll('._goto-block._active');
			if (old_current_link) {
				for (let index = 0; index < old_current_link.length; index++) {
					let el = old_current_link[index];
					el.classList.remove('_active');
				}
			}
			for (let index = 0; index < blocks.length; index++) {
				let block = blocks[index];
				let block_item = document.querySelector('.' + block);
				if (block_item) {
					let block_offset = offset(block_item).top;
					let block_height = block_item.offsetHeight;
					if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
						let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
						for (let index = 0; index < current_links.length; index++) {
							let current_link = current_links[index];
							current_link.classList.add('_active');
						}
					}
				}
			}
		})
	}
	//ScrollOnClick (Simple)
	let goto_links = document.querySelectorAll('._goto');
	if (goto_links) {
		for (let index = 0; index < goto_links.length; index++) {
			let goto_link = goto_links[index];
			goto_link.addEventListener('click', function (e) {
				let target_block_class = goto_link.getAttribute('href').replace('#', '');
				let target_block = document.querySelector('.' + target_block_class);
				_goto(target_block, 300);
				e.preventDefault();
			});
		}
	}
	function _goto(target_block, speed, offset = 0) {
		let header = '';
		//OffsetHeader
		//if (window.innerWidth < 992) {
		//	header = 'header';
		//}
		let options = {
			speedAsDuration: true,
			speed: speed,
			header: header,
			offset: offset,
			easing: 'easeOutQuad',
		};
		let scr = new SmoothScroll();
		scr.animateScroll(target_block, '', options);
	}

	//SameFunctions
	function offset(el) {
		var rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	function disableScroll() {
		if (window.addEventListener) // older FF
			window.addEventListener('DOMMouseScroll', preventDefault, false);
		document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
		window.onwheel = preventDefault; // modern standard
		window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		window.ontouchmove = preventDefault; // mobile
		document.onkeydown = preventDefaultForScrollKeys;
	}
	function enableScroll() {
		if (window.removeEventListener)
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
		document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
		window.onmousewheel = document.onmousewheel = null;
		window.onwheel = null;
		window.ontouchmove = null;
		document.onkeydown = null;
	}
	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	}
	function preventDefaultForScrollKeys(e) {
		/*if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}*/
	}

	function fix_block(scr_fix_block, scr_value) {
		let window_width = parseInt(window.innerWidth);
		let window_height = parseInt(window.innerHeight);
		let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
		for (let index = 0; index < scr_fix_block.length; index++) {
			const block = scr_fix_block[index];
			let block_width = block.getAttribute('data-width');
			const item = block.querySelector('._side-block');
			if (!block_width) { block_width = 0; }
			if (window_width > block_width) {
				if (item.offsetHeight < window_height - (header_height + 30)) {
					if (scr_value > offset(block).top - (header_height + 15)) {
						item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
					} else {
						gotoRelative(item);
					}
					if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
						block.style.cssText = "position:relative;";
						item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
					}
				} else {
					gotoRelative(item);
				}
			}
		}
		function gotoRelative(item) {
			item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
		}
	}

	if (!isMobile.any()) {
		//custom_scroll();
		/*
		window.addEventListener('wheel', scroll_animate, {
			capture: true,
			passive: true
		});
		window.addEventListener('resize', custom_scroll, {
			capture: true,
			passive: true
		});
		*/
	}
	function custom_scroll(event) {
		scr_body.style.overflow = 'hidden';
		let window_height = window.innerHeight;
		let custom_scroll_line = document.querySelector('._custom-scroll__line');
		let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
		let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
		if (custom_scroll_content_height > window_height) {
			if (!custom_scroll_line) {
				let custom_scroll = document.createElement('div');
				custom_scroll_line = document.createElement('div');
				custom_scroll.setAttribute('class', '_custom-scroll');
				custom_scroll_line.setAttribute('class', '_custom-scroll__line');
				custom_scroll.appendChild(custom_scroll_line);
				scr_body.appendChild(custom_scroll);
			}
			custom_scroll_line.style.height = custom_cursor_height + 'px';
		}
	}

	let new_pos = pageYOffset;
	function scroll_animate(event) {
		let window_height = window.innerHeight;
		let content_height = document.querySelector('.wrapper').offsetHeight;
		let start_position = pageYOffset;
		let pos_add = 100;

		if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
			new_pos = new_pos - pos_add;
		} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
			new_pos = new_pos + pos_add;
		}
		if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
		if (new_pos < 0) new_pos = 0;

		if (scrolling) {
			scrolling = false;
			_goto(new_pos, 1000);

			let scr_pause = 100;
			if (navigator.appVersion.indexOf("Mac") != -1) {
				scr_pause = scr_pause * 2;
			};
			setTimeout(function () {
				scrolling = true;
				_goto(new_pos, 1000);
			}, scr_pause);
		}
		//If native scroll
		//disableScroll();
	}



	// ==========================================================================================================================================================================================================================================================================================================================



	// ==========================================================================================================================================================================================================================================================================================================================


	// ==========================================================================================================================================================================================================================================================================================================================



});
