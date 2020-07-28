// var buttonEl = document.querySelector("input.button");
var textEl = document.querySelector("input.text-show");

function clearText() {
	// console.log("=====清除！！====");
	textEl.value = "";
}

function delText(){
	// console.log("删除最后一个字符")
	var str = textEl.value;
	textEl.value = str.substring(0, str.length - 1);
}

function get(value) {
	textEl.value += value;
	// console.log("=====取值！！====");
}

function calculate() {
	// console.log("=====结果！！====");
	var result =textEl.value;
	console.log(result);
	textEl.value = eval(result);
}
