var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/nickveil/json-practice/master/contacts.json';

var request = new XMLHttpRequest();

request.open('Get', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
	var contacts = request.response;
	populateHeader(contacts);
	showContacts(contacts);
}

function populateHeader (jsonObj){
	var myH1 = document.createElement('h1');
	myH1.textContent = jsonObj.listOwner +"'s Contacts";
	header.appendChild(myH1);
}

function showContacts(jsonObj){
	var contacts = jsonObj.contacts;

	for (var i=0; i<contacts.length; i++){
		var myArticle = document.createElement('article');
		var myH2 = document.createElement('h2');
		var myPara1 = document.createElement('p');
		var myPara2 = document.createElement('p');
		var myH3 = document.createElement('h3');
		var myPara3 = document.createElement('p');

		myH2.textContent = contacts[i].name;
		myPara1.textContent = contacts[i].streetAddress;
		myPara2.textContent = contacts[i].city +', '+contacts[i].state+' '+contacts[i].zipCode;
		myH3.textContent = contacts[i].phoneNumber;
		myPara3.textContent = contacts[i].email;

		myArticle.appendChild(myH2);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);
		myArticle.appendChild(myH3);
		myArticle.appendChild(myPara3);

		section.appendChild(myArticle);
		
	}

}