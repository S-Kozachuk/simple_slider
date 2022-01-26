const btnL = document.getElementById('btnL');
const btnR = document.getElementById('btnR');
const slider = document.querySelector('.slider');
let offset = 0;

// Added class for active button (if there is pushing)
function activ () {
	btnL.className = "slider-prev";
	btnR.className = "slider-next";
};

// Условия перемещение слайдера по клику на левую кнопку
btnL.addEventListener('click', () => {
	btnL.classList.add('active');
	// величина смещения вправо (ширина изобр.+отступы)
	offset -= 105;
	if (offset < 0){
		offset = 630;
	};

	// Исполнительная функция (перемещение)
	slider.style.left = -offset + 'px';
	// Запуск функции activ с задержкой 400 мс
	setTimeout(activ, 400);
});

btnR.addEventListener('click', () => {
	btnR.classList.add('active');
	offset += 105;
	if (offset > 630){
		offset = 0;
	};

	slider.style.left = -offset + 'px';
	setTimeout(activ, 400);
});