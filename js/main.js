const $owlCarousel = $(".owl-carousel").owlCarousel({
	items: 1,
	loop: true,
	nav: true,
	autoplay: true,
	navText: [
		'<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
		'<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
	]
});

function ibg() {
	let ibg = document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if (ibg[i].querySelector('img')) { ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'; } }
}
ibg();

$owlCarousel.trigger("refresh.owl.carousel");

$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .sidenav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
