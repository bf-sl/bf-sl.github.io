const leagueButton = document.getElementById('league');
const statsButton = document.getElementById('stats');
const newsButton = document.getElementById('news');
const goBackButton = Array.from(document.getElementsByClassName('goBackButton'));

const main = document.getElementById('main');
const leagueFrame = document.getElementById('leagueFrame');
const statsFrame = document.getElementById('statsFrame');
const newsFrame = document.getElementById('newsFrame');

leagueFrame.remove();
statsFrame.remove();
newsFrame.remove();

leagueFrame.style.opacity = "0";
statsFrame.style.opacity = "0";
newsFrame.style.opacity = "0";

let currentFrame = main;

leagueButton.addEventListener("click", () => {
	currentFrame.style.animation = "showTitle 200ms reverse forwards ease";
	setTimeout(() => {
		currentFrame = leagueFrame;
		document.getElementById("contentFrame").appendChild(currentFrame);
		currentFrame.style.animation = "showTitle 200ms forwards ease"
	}, 200);
});
statsButton.addEventListener("click", () => {
	currentFrame.style.animation = "showTitle 200ms reverse forwards ease";
	setTimeout(() => {
		currentFrame = statsFrame;
		document.getElementById("contentFrame").appendChild(currentFrame);
		currentFrame.style.animation = "showTitle 200ms forwards ease"
	}, 200);
});
newsButton.addEventListener("click", () => {
	currentFrame.style.animation = "showTitle 200ms reverse forwards ease";
	setTimeout(() => {
		currentFrame = newsFrame;
		document.getElementById("contentFrame").appendChild(currentFrame);
		currentFrame.style.animation = "showTitle 200ms forwards ease"
	}, 200);
});

for (const button of goBackButton) {
	button.addEventListener("click", () => {
		currentFrame.style.animation = "showTitle 200ms reverse forwards ease";
		setTimeout(() => {
			currentFrame = main;
			document.getElementById("contentFrame").appendChild(currentFrame);
			currentFrame.style.animation = "showTitle 200ms forwards ease"
		}, 200);
	})
}

