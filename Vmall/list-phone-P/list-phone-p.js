// 所有的网页中存在一个全局对象window
// indexOf返回下标
var cid = parseInt(window.location.search.slice(window.location.search.indexOf("=") + 1));
// console.log(cid);
var productList = 
JSON.parse(sessionStorage.getItem("data")).productList.filter(function(item){
	return item.cid === cid; 
});
// 函数如果没有显示的return一值 则默认return的是undefined 而undefined转化成bool值是假



productList.forEach(function(item) {
	var liEl = document.createElement("li");
	liEl.innerHTML = `
		<a href="../product-detail/product-detail.html?pid=${ item.pid }">
			<img src="${ item.avatar }" />
			<h4>${ item.name }</h4>
			<span class="price">￥${ item.price }</span>
			<span class="tips">${ item.tips }</span>
			<p class="info"><span>${ item.info }</span></p>
			<span class="conment-count">${ item.conmentcount }人评价</span>
			<span class="conment-rate">${ item.conmentrate }%好评</span>
		</a>
	`;
	document.querySelector("ul.product-list-ul").appendChild(liEl);
});








