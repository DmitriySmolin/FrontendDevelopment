let getData = document.querySelector('#btn-1');
let getPeople = document.querySelector('#btn-2');

getData.addEventListener('click', function () {
	let request = new XMLHttpRequest();
	request.open('GET', 'https://reqres.in/api/users?page=2', true);
	request.send();
	request.addEventListener('readystatechange', function (data) {
		if (request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);
			console.log(data);
		};
	});
});


getPeople.addEventListener('click', function () {
	let request = new XMLHttpRequest();
	request.open('GET', 'https://api.randomuser.me/1.0/?results=12&nat=gb,us&inc=gender,name,location,email,phone,picture', true);
	request.send();

	request.addEventListener('readystatechange', function (data) {
		if (request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);
			let output = '<h2>People</h2>';

			data.results.forEach(function (data) {
				output += `
                 <ul class="wrap-list">
                 <li> <img src = "${data.picture.medium} "> </li>
                 <li> Name: ${data.name.title} ${data.name.first} ${data.name.last}</li>
 				 <li> Gender: ${data.gender}</li>
				 <li> Email: ${data.email}</li>
                 <li> Phone: ${data.phone}</li>
                 </ul>
                `;
			});
			document.querySelector('#box').innerHTML = output;
		};
	});

});
