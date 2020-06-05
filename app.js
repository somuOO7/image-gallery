var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');
var img4 = document.getElementById('img-4');
var img5 = document.getElementById('img-5');
var img6 = document.getElementById('img-6');
var img7 = document.getElementById('img-7');

img1.addEventListener('mouseover', () => {
	img1.classList.toggle('active');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img2.addEventListener('mouseover', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('active');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img3.addEventListener('mouseover', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('active');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img4.addEventListener('mouseover', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('active');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img5.addEventListener('mouseover', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('active');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img6.addEventListener('mouseover', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('active');
	img7.classList.toggle('inactive');
});
img7.addEventListener('mouseover', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('active');
});

img1.addEventListener('mouseout', () => {
	img1.classList.toggle('active');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img2.addEventListener('mouseout', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('active');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img3.addEventListener('mouseout', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('active');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img4.addEventListener('mouseout', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('active');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img5.addEventListener('mouseout', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('active');
	img6.classList.toggle('inactive');
	img7.classList.toggle('inactive');
});
img6.addEventListener('mouseout', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('active');
	img7.classList.toggle('inactive');
});
img7.addEventListener('mouseout', () => {
	img1.classList.toggle('inactive');
	img2.classList.toggle('inactive');
	img3.classList.toggle('inactive');
	img4.classList.toggle('inactive');
	img5.classList.toggle('inactive');
	img6.classList.toggle('inactive');
	img7.classList.toggle('active');
});
