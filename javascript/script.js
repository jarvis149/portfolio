document.querySelector('.right').addEventListener('click', function() {

	rightSlider()

});
document.querySelector('.left').addEventListener('click', function() {

	leftSlider()

});


function rightSlider() {

	document.querySelector('.welcome-part').classList.add('forward');
	document.querySelector('.welcome-part').classList.remove('back');
	document.querySelector('.about').classList.remove('not-visible');
	document.querySelector('.about').classList.add('back');
	document.querySelector('.about').classList.remove('forward');

	document.querySelector('.right').classList.add('colored');
	document.querySelector('.left').classList.remove('colored');

}

function leftSlider() {

	document.querySelector('.welcome-part').classList.toggle('forward');
	document.querySelector('.welcome-part').classList.toggle('back');


	document.querySelector('.about').classList.toggle('forward');
	document.querySelector('.about').classList.toggle('back');


	document.querySelector('.right').classList.toggle('colored');
	document.querySelector('.left').classList.toggle('colored');

}

//add function to showMore btn

if (window.matchMedia("(max-width: 500px)").matches) {

	$(".show-link").click(function() {


//	$(".project-2").css("margin-left", "0px");

	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";

			document.querySelector(".project-2").style.marginRight = "0px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";
//			document.querySelector(".project-2").style.marginRight = "90px";


			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");


		}

}
	});

	} else {

		$(".show-link").click(function() {


	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";

			document.querySelector(".project-2").style.marginLeft = "0px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";

						document.querySelector(".project-2").style.marginLeft = "60px";

			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");

		}




	}
});

}
if (window.matchMedia("(max-width: 500px)").matches) {

	$(".show-link1").click(function() {


//	$(".project-2").css("margin-left", "0px");

	if(document.getElementById("photo1").style.display==='none'){
      document.getElementById("photo1").style.display="block";
      $(".more1").addClass("toggle1");

			$(".less1").removeClass("toggle1");
	}
	else{
		document.getElementById("photo1").style.display="none";
		$(".more1").removeClass("toggle1");
			$(".less1").addClass("toggle1");
	}
	});

	} else {

		$(".show-link1").click(function() {


//	$(".project-2").css("margin-left", "0px");

	if(document.getElementById("photo1").style.display==='none'){
      document.getElementById("photo1").style.display="block";
      $(".more1").addClass("toggle1");

			$(".less1").removeClass("toggle1");
	}
	else{
		document.getElementById("photo1").style.display="none";
		$(".more1").removeClass("toggle1");
			$(".less1").addClass("toggle1");
	}
	});
}

// add function to mobile nav icons

document.querySelector('.nav-icon').addEventListener('click', function()  {

	document.querySelector('.menu').classList.add('opened');
	document.querySelector('.menu').classList.remove('closed');

	document.querySelector('.close').style.display = 'block';

});

document.querySelector('.close').addEventListener('click', function() {

	document.querySelector('.menu').classList.remove('opened');
	document.querySelector('.menu').classList.add('closed');

	document.querySelector('.close').style.display = 'none';


});
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
  let duration = Math.random() * (1.2 - 0.6) + 0.6;
  star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});

