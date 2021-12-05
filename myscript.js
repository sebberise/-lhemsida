window.addEventListener("scroll", reveal);

function reveal(){
	var reveals = document.querySelectorAll(".reveal");
	
	for(var i = 0; i < reveals.length; i++){
		
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 100;
		
		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add("active");
		}
	}
}

    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      });
		
	function imgSlider(anything){
		document.querySelector('.starbucks').src = anything;
	}

function changeCircleColor(color){
	const circle = document.querySelector('.lager-circle');
	circle.style.background = color;
}