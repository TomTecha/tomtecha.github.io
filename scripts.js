if (window.innerWidth <= 650) {
	const links = document.querySelector('#links');
	const menu = document.querySelector('#menu');
	menu.onclick = toggleMenu;
	links.onclick = toggleMenu;
	links.classList.toggle('hidden-links');
	function toggleMenu() {
		links.classList.toggle('expanded-links');
		links.classList.toggle('hidden-links');
	}

	screen.orientation.addEventListener('change', () => {
		document.querySelector('#navbar').style.backgroundColor = 'red';
	});
}

											// UNFINISHED!!!!
// Make an animated fade-in for services
const fadeSpeed = 400; 
const services = document.querySelectorAll('.service-block');
for (let i = 0; i < services.length; i++) {
	const service = services[i];
	const start = new Date();
	let curr = new Date();
	while (start + fadeSpeed > curr) {
		curr = new Date();
		console.log("Fadeeee");
	}
}


