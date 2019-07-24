let getData = document.querySelector('#btn-1');

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
