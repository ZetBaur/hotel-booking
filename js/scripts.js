$(document).ready((function(){function e(e){this.type=e}$(".btn").on("click",(function(){console.log(5)})),e.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],n=t.dataset.da.trim().split(","),o={};o.element=t,o.parent=t.parentNode,o.destination=document.querySelector(n[0].trim()),o.breakpoint=n[1]?n[1].trim():"767",o.place=n[2]?n[2].trim():"last",o.index=this.indexInParent(o.parent,o.element),this.оbjects.push(o)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const n=this.mediaQueries[t],o=String.prototype.split.call(n,","),i=window.matchMedia(o[0]),s=o[1],l=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===s}));i.addListener((function(){e.mediaHandler(i,l)})),this.mediaHandler(i,l)}},e.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const n=t[e];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let e=0;e<t.length;e++){const n=t[e];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},e.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){const n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))};new e("max").init(),$.each($(".checkbox"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$(document).on("click",".checkbox",(function(e){return $(this).hasClass("active")?$(this).find("input").prop("checked",!1):$(this).find("input").prop("checked",!0),$(this).toggleClass("active"),!1})),$.each($(".radiobuttons__item"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$(document).on("click",".radiobuttons__item",(function(e){return $(this).parents(".radiobuttons").find(".radiobuttons__item").removeClass("active"),$(this).parents(".radiobuttons").find(".radiobuttons__item input").prop("checked",!1),$(this).toggleClass("active"),$(this).find("input").prop("checked",!0),!1})),$(".search-btn").on("mouseover",(function(e){e.preventDefault(),$(".search-input").addClass("active")})),$(document).click((function(e){$(e.target).is(".search-btn, .search-input input")||$(".search-input").removeClass("active")}));let t=document.querySelectorAll("._spoller"),n=!0;if(t.length>0)for(let e=0;e<t.length;e++){const o=t[e];o.addEventListener("click",(function(e){if(n){if(n=!1,o.classList.contains("_spoller-992")&&window.innerWidth>992)return!1;if(o.classList.contains("_spoller-768")&&window.innerWidth>768)return!1;if(o.closest("._spollers").classList.contains("_one")){let e=o.closest("._spollers").querySelectorAll("._spoller");for(let t=0;t<e.length;t++){let n=e[t];n!=o&&(n.classList.remove("_active"),_slideUp(n.nextElementSibling))}}o.classList.toggle("_active"),_slideToggle(o.nextElementSibling),setTimeout((function(){n=!0}),500)}}))}document.querySelector("body");let o=document.querySelectorAll("._scr-sector"),i=document.querySelectorAll("._scr-item"),s=document.querySelectorAll("._side-wrapper"),l=!0,r=0;function c(){let e=pageYOffset,t=document.querySelector("header.header");if(null!==t&&(e>10?t.classList.add("_scroll"):t.classList.remove("_scroll")),o.length>0)for(let e=0;e<o.length;e++){let t=o[e],n=m(t).top,i=t.offsetHeight;pageYOffset>n-window.innerHeight/1.5&&pageYOffset<n+i-window.innerHeight/5?t.classList.add("_scr-sector_active"):t.classList.contains("_scr-sector_active")&&t.classList.remove("_scr-sector_active"),pageYOffset>n-window.innerHeight/2&&pageYOffset<n+i-window.innerHeight/5?t.classList.contains("_scr-sector_current")||t.classList.add("_scr-sector_current"):t.classList.contains("_scr-sector_current")&&t.classList.remove("_scr-sector_current")}if(i.length>0)for(let t=0;t<i.length;t++){let n=i[t],o=m(n).top,s=n.offsetHeight,l=window.innerHeight-(window.innerHeight-s/3);window.innerHeight>s&&(l=window.innerHeight-s/3),e>o-l&&e<o+s?(n.classList.add("_active"),d(n)):n.classList.remove("_active"),e>o-window.innerHeight&&n.querySelectorAll("._lazy").length>0&&a(n)}s.length>0&&function(e,t){let n=parseInt(window.innerWidth),o=parseInt(window.innerHeight),i=parseInt(document.querySelector("header").offsetHeight)+15;for(let l=0;l<e.length;l++){const r=e[l];let c=r.getAttribute("data-width");const a=r.querySelector("._side-block");c||(c=0),n>c&&(a.offsetHeight<o-(i+30)?(t>m(r).top-(i+15)?a.style.cssText="position:fixed;bottom:auto;top:"+i+"px;width:"+r.offsetWidth+"px;left:"+m(r).left+"px;":s(a),t>r.offsetHeight+m(r).top-(a.offsetHeight+(i+15))&&(r.style.cssText="position:relative;",a.style.cssText="position:absolute;bottom:0;top:auto;left:0px;width:100%")):s(a))}function s(e){e.style.cssText="position:relative;bottom:auto;top:0px;left:0px;"}}(s,e);let n=document.querySelector("._custom-scroll__line");if(n){let e=window.innerHeight,t=document.querySelector(".wrapper").offsetHeight,o=pageYOffset/(t-e)*100,i=n.offsetHeight;n.style.transform="translateY("+(e-i)/100*o+"px)"}r=e<=0?0:e}function a(e){let t=e.querySelectorAll("*[data-src]");if(t.length>0)for(let e=0;e<t.length;e++){const n=t[e];n.classList.contains("_loaded")||(n.setAttribute("src",n.getAttribute("data-src")),n.classList.add("_loaded"))}let n=e.querySelectorAll("*[data-srcset]");if(n.length>0)for(let e=0;e<n.length;e++){const t=n[e];t.classList.contains("_loaded")||(t.setAttribute("srcset",t.getAttribute("data-srcset")),t.classList.add("_loaded"))}}function d(e){if(e.classList.contains("_load-map")&&!e.classList.contains("_loaded-map")){document.getElementById("map")&&(e.classList.add("_loaded-map"),map())}}function u(e){g(),l=!1,h(e,800);let t=500;-1!=navigator.appVersion.indexOf("Mac")&&(t=1e3),setTimeout((function(){l=!0}),t)}window.addEventListener("scroll",c),setTimeout((function(){c()}),100),o.length>0&&!isMobile.any()&&(g(),window.addEventListener("wheel",(function(e){let t=window.innerHeight;if(t>=750)if(l){let n,o=pageYOffset,i=document.querySelector("._scr-sector._scr-sector_current"),s=m(i).top,l=i.offsetHeight,r=i.nextElementSibling,c=i.previousElementSibling;if(40==e.keyCode||34==e.keyCode||e.deltaX>0||e.deltaY<0){if(c){let e=c.offsetHeight;n=m(c).top,l<=t?e>=t&&(n+=e-t,u(n)):(w(),o<=s&&u(n))}}else(38==e.keyCode||33==e.keyCode||e.deltaX<0||e.deltaY>0)&&r&&(n=m(r).top,l<=t?u(n):(w(),o>=n-t&&u(n)))}else g();else w()})));let p=document.querySelectorAll("._goto-block");if(p){let e=[];for(let t=0;t<p.length;t++){let n=p[t],o=n.getAttribute("href").replace("#","");""==o||~e.indexOf(o)||e.push(o),n.addEventListener("click",(function(e){document.querySelector(".menu__body._active")&&(menu_close(),body_lock_remove(500));let t=n.getAttribute("href").replace("#","");h(document.querySelector("."+t),300),e.preventDefault()}))}window.addEventListener("scroll",(function(t){let n=document.querySelectorAll("._goto-block._active");if(n)for(let e=0;e<n.length;e++){n[e].classList.remove("_active")}for(let t=0;t<e.length;t++){let n=e[t],o=document.querySelector("."+n);if(o){let e=m(o).top,t=o.offsetHeight;if(pageYOffset>e-window.innerHeight/3&&pageYOffset<e+t-window.innerHeight/3){let e=document.querySelectorAll('._goto-block[href="#'+n+'"]');for(let t=0;t<e.length;t++){e[t].classList.add("_active")}}}}}))}let f=document.querySelectorAll("._goto");if(f)for(let e=0;e<f.length;e++){let t=f[e];t.addEventListener("click",(function(e){let n=t.getAttribute("href").replace("#","");h(document.querySelector("."+n),300),e.preventDefault()}))}function h(e,t,n=0){let o={speedAsDuration:!0,speed:t,header:"",offset:n,easing:"easeOutQuad"};(new SmoothScroll).animateScroll(e,"",o)}function m(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}function g(){window.addEventListener&&window.addEventListener("DOMMouseScroll",y,!1),document.addEventListener("wheel",y,{passive:!1}),window.onwheel=y,window.onmousewheel=document.onmousewheel=y,window.ontouchmove=y,document.onkeydown=_}function w(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",y,!1),document.removeEventListener("wheel",y,{passive:!1}),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}function y(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function _(e){}isMobile.any();pageYOffset}));