var firebaseConfig = {
	apiKey: "AIzaSyBPNU2MR2HBheKEPBgfwYKPcwNfPFVPBXs",
	authDomain: "wedesign-web.firebaseapp.com",
	projectId: "wedesign-web",
	storageBucket: "wedesign-web.appspot.com",
	messagingSenderId: "156303661006",
	appId: "1:156303661006:web:488315996f83351626bd9f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Mobile Menu
document.getElementById("hamburger-icon").onclick = function () {
	document.getElementById("sliding-header-menu-outer").style.right = "0";
};

document.getElementById(
	"sliding-header-menu-close-button",
).onclick = function () {
	document.getElementById("sliding-header-menu-outer").style.right = "-320px";
};

// About us Tab

var aboutUs = {
	Mission:
		"Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
	Vision:
		"Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
	Values:
		"<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>",
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs = document.getElementsByClassName("single-tab");
for (a = 0; a < aboutUsTabs.length; a++) {
	aboutUsTabs[a].onclick = function () {
		var clickedValue = this.innerHTML;
		console.log(aboutUs[clickedValue]);
		document.getElementById("box-text").innerHTML = aboutUs[clickedValue];
		for (b = 0; b < aboutUsTabs.length; b++) {
			aboutUsTabs[b].style.backgroundColor = unseletectedColor;
			aboutUsTabs[b].style.fontWeight = "normal";
		}
		this.style.backgroundColor = seletectedColor;
		this.style.fontWeight = "bold";
	};
}

// Service slider

var ourServices = [
	{
		title: "Web design",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.",
	},

	{
		title: "Branding",
		text:
			"Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.",
	},

	{
		title: "Digital Marketing",
		text:
			"Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.",
	},
];
var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var serviceTitleArea = document.getElementById("service-title");
var serviceTextArea = document.getElementById("service-text");

var currentText = 0;
nextArrow.onclick = function () {
	if (currentText == ourServices.length - 1) {
		currentText = 0;
	} else {
		currentText += 1;
	}
	var title = ourServices[currentText].title;
	var text = ourServices[currentText].text;
	serviceTitleArea.innerHTML = title;
	serviceTextArea.innerHTML = text;
};

previousArrow.onclick = function () {
	if (currentText == 0) {
		currentText = ourServices.length - 1;
	} else {
		currentText -= 1;
	}
	currentText -= 1;
	var title = ourServices[currentText].title;
	var text = ourServices[currentText].text;
	serviceTitleArea.innerHTML = title;
	serviceTextArea.innerHTML = text;
};

//Contact area
//* Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");
//*Listen for a submit
document.querySelector("#email_form").addEventListener("submit", submitForm);
function submitForm(e) {
	e.preventDefault();
	//* Get Input Values
	let subject = document.querySelector("#subject").value;
	let name = document.querySelector("#name").value;
	let email = document.querySelector("#email").value;
	let message = document.querySelector("#message").value;
	saveContactInfo(subject, name, email, message);
	document.querySelector("#email_form").reset();
	console.log(name, email, message, subject);
}

//*Save infos to Firebase
function saveContactInfo(subject, name, email, message) {
	let newContactInfo = contactInfo.push();
	newContactInfo.set({
		subject: subject,
		FullName: name,
		Email: email,
		message: message,
	});
	retrieveInfos();
}

//*Retrieve infos
function retrieveInfos() {
	let ref = firebase.database().ref("infos");
	ref.on("value", gotData);
}

function gotData(data) {
	let infos = data.val();
	let keys = Object.keys(info);
	for (let i = 0; i < keys.length; i++) {
		let infoData = keys[i];
		let name = infos[infoData].name;
		let email = info[infoData].email;
		let message = info[infoData].message;
		let subject = info[infoData].subject;
		console.log(name, email, message, subject);
		let infoResults = document.querySelector("#infoResults");
	}
}
// Footer
document.getElementById("current_year").innerHTML = new Date().getFullYear();
