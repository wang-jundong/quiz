var server_echo;
var data = {
	a: 1,
	b: 2,
	delay: 3,
};
fetch("/echo/", {
	method: "post",
	headers: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
	},
	body: JSON.stringify(data),
})
	.then(function (response) {
		server_echo = response.json().echo;
		return response.json();
	})
	.then(function (result) {
		alert(result);
	})
	.catch(function (error) {
		console.log("Request failed", error);
	});

if (server_echo) server_echo.forEach((element) => console.log(element));
