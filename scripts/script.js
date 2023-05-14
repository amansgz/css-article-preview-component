
const cardFooter = document.querySelector('.card-footer');
const avatar = document.querySelector('.writer-avatar');
const name = document.querySelector('.writer-name');
const date = document.querySelector('.writer-date');
const iconShare = document.querySelector('.icon-share');
const socialLinks = document.querySelector('.social-links');

iconShare.addEventListener('click', () => {
	cardFooter.classList.toggle('bg-active-footer');
	avatar.classList.toggle('hide');
	name.classList.toggle('hide');
	date.classList.toggle('hide');
	socialLinks.classList.toggle('show');
})

