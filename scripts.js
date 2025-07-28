if (window.innerWidth <= 650) {
	const links = document.querySelector('#links');
	const menu = document.querySelector('#menu');
	let expanded = false;
	menu.onclick = () => {
		links.classList.toggle('expanded-links');
		expanded = !expanded;
		if (!expanded) {
			links.style.display = 'none';
		} else {
			links.style.display = 'flex';
		}
	};
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


