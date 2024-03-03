const submitButton = document.getElementById('submit-btn');
const resetButton = document.getElementById('reset-btn');

submitButton.addEventListener('click', (event) => {
	event.preventDefault();

	const userName = document.getElementById('user-id').value;

	let selectedSongs = [];
	const checkboxes = document.querySelectorAll('.song__checkbox:checked');
	checkboxes.forEach((check) => {
		selectedSongs.push(check.value);
	});

	const message = `${userName}님은 저와 ${selectedSongs.length}개의 노래가 일치합니다! ☺️`;

	alert(message);
});

resetButton.addEventListener('click', () => {
	document.getElementById('user-id').value = '';

	let checkboxes = document.querySelectorAll('.song__checkbox:checked');
	checkboxes.forEach((checkbox) => {
		checkbox.checked = false;
	});
});
