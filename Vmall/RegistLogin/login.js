document.querySelector('input.btn-login').onclick = function() {
	Cookies.set('user', 'user1');
	var backUrl = Cookies.get('backUrl');
	Cookies.remove('backUrl');
	window.location.href = backUrl || '../index/index.html';
};
