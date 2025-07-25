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
