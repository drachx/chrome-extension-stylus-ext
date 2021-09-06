
function hideYT () {
	var btn = document.querySelector(".ytp-ad-skip-button");
	if (btn && btn.click) {
		btn.click();
	}
}

if (location.hostname.match('youtube.com')) {
	setInterval(hideYT, 1000); 
}
