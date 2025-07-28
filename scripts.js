if (window.innerWidth <= 650) {
	const links = document.querySelector('#links');
	const menu = document.querySelector('#menu');
	menu.onclick = toggleMenu;
	links.onclick = toggleMenu;
	function toggleMenu() {
		links.classList.toggle('expanded-links');
		if (links.classList.contains('expanded-links')) {
			links.style.display = 'flex';
		} else {
			links.style.display = 'none';
		}
	}
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


