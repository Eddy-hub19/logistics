document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("dropdownWrap"),n=document.getElementById("dropdownContent");e.addEventListener("click",(()=>{n.classList.toggle("show"),e.classList.toggle("open")})),document.addEventListener("click",(t=>{const o=t.target;e.contains(o)||(n.classList.remove("show"),e.classList.remove("open"))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".hamburger-icon"),n=document.querySelector(".close-icon"),t=document.querySelector(".mobile-menu");e.addEventListener("click",(function(){e.style.display="none",n.style.display="block",t.classList.add("open")})),n.addEventListener("click",(function(){n.style.display="none",e.style.display="block",t.classList.remove("open")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".mobile-svg"),n=document.querySelector(".phone-popup-mobile"),t=document.querySelector(".hamburger-icon"),o=document.querySelector(".close-icon");e.addEventListener("click",(function(){n.style.display="none"===n.style.display?"block":"none","block"===n.style.display?(t.style.display="none",o.style.display="block",o.querySelector("path").setAttribute("stroke","white")):(o.style.display="none",t.style.display="block")})),o.addEventListener("click",(function(){n.style.display="none",o.style.display="none",t.style.display="block"})),t.addEventListener("click",(function(){o.querySelector("path").setAttribute("stroke","currentColor")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".phone-modal-form-js"),n=document.querySelector(".form-popup"),t=document.querySelector(".close-icon"),o=document.querySelector(".phone-popup-mobile");e.addEventListener("click",(function(){n.style.display="none"===n.style.display?"block":"none",o.style.display="none"})),t.addEventListener("click",(function(){n.style.display="none",o.style.display="none"}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".lang a");e.forEach((function(n){n.addEventListener("click",(function(t){t.preventDefault(),e.forEach((function(e){e.classList.remove("current")})),n.classList.add("current")}))}))})),document.addEventListener("DOMContentLoaded",(function(){if(window.innerWidth<=1440){[{container:".swiper-container",pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",breakpoints:{732:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20}}},{container:".swiper-container1",pagination:".swiper-pagination1",nextButton:".swiper-button-next1",prevButton:".swiper-button-prev1",breakpoints:{732:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20}}},{container:".swiper-container2",pagination:".swiper-pagination2",nextButton:".swiper-button-next2",prevButton:".swiper-button-prev2",breakpoints:{732:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20}}},{container:".swiper-container3",pagination:".swiper-pagination3",nextButton:".swiper-button-next3",prevButton:".swiper-button-prev3",breakpoints:{732:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20}}},{container:".swiper-container4",pagination:".swiper-pagination4",nextButton:".swiper-button-next4",prevButton:".swiper-button-prev4",breakpoints:{732:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20}}},{container:".swiper-container5",pagination:".swiper-pagination5",nextButton:".swiper-button-next5",prevButton:".swiper-button-prev5",breakpoints:{732:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20}}},{container:".swiper-container6",pagination:".swiper-pagination6",nextButton:".swiper-button-next6",prevButton:".swiper-button-prev6",breakpoints:{732:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20}}}].forEach((e=>{new Swiper(e.container,{slidesPerView:"auto",spaceBetween:20,loop:!0,pagination:{el:e.pagination,clickable:!0},navigation:{nextEl:e.nextButton,prevEl:e.prevButton},breakpoints:e.breakpoints})}))}}));
//# sourceMappingURL=index.6e8b7b37.js.map
