function test() {
    alert('你点击了按钮123456');
}

function ping() {
	var Http = new XMLHttpRequest();
	Http.open("GET", 'https://cors-demo.glitch.me/allow-cors');
	Http.send();

	Http.onreadystatechange = (e) => {
	  console.log(Http.responseText);
	};
}

function add(a, b) {
    return a+b;
} 



