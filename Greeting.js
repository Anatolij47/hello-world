let message="Hello!";
let iterator = 0;
let thumbler = 0;

var Interval = setInterval(Talk, 1500);
function Talk(){
	document.write(message[iterator++]);
	if(thumbler == message.length - 1){
		clearInterval(Interval);
	}
	thumbler++;
}