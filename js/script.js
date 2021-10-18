let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
	offset = offset + 400; //ofset += 400;
	if (offset > 2400) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
	offset = offset - 400; //ofset -= 400;
	if (offset < 0) {
		offset = 2400;
	}
	sliderLine.style.left = -offset + 'px';
});