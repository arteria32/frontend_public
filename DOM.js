let minRange = 200;
let maxRange = 800;
let elements = document.querySelector('.elements__wrapper');


document.querySelector('#file__upload').addEventListener("change", function() {
    const reader = new FileReader();
    reader.readAsText(this.files[0]);
    reader.addEventListener('load', event => {
        const tanks = JSON.parse(reader.result);
        if (!tanks.length) {
            alert('Файл пуст.');
            return;
        }
        displayTanks(tanks);
        document.querySelector('#file__upload').value = null;
    })
});
    
    
document.querySelector('#change__range').addEventListener('click', function() {
    let min = prompt('Введите нижнюю границу диапазона (> 0) :');
    let max = prompt('Введите верхнюю границу диапазона (< 1000) :');
    if (max > min && min > 0 && max < 1000) {
        minRange = min;
        maxRange = max;
        elements.innerHTML = '';
        document.querySelectorAll('.minRange').forEach(element => {
            element.innerHTML = minRange;
        });
        document.querySelectorAll('.maxRange').forEach(element => {
            element.innerHTML = maxRange;
        });
    } else {
        alert('Данные введены неверно.');
    }
});


function displayTanks(tanks) {
    elements.innerHTML = '';
    tanks.forEach( (tank, index) => {
        let line_color = tank.value >= minRange && tank.value <= maxRange ? 'blue' : 'red';
        let percent = Math.round(tank.value / maxRange * 100);
        let tankHTML = `
            <li class="element">

                    <div class="element__title">
                        <div class="element__weight">Масса</div>
                        <div class="element__value">${tank.value}</div>
                    </div>

                    <div class="element__${line_color}line"></div>
                    
                    <div class="container__border">
                        <div class="container__serif"></div>
                        <div class="container__serif"></div>
                        <div class="container__serif"></div>
                    </div>
                    
                    <div class="container" id="container__${index+1}"></div>
                    <div class="content" id="content__${index+1}"></div>
                    <div class="container__border"></div>

                    <div class="element__info">
                        <div class="container__percentage">${percent}%</div>
                        <div class="container__info">Уровень керосина в резервуаре №${index+1}</div>
                    </div>
            </li> `

        elements.innerHTML += tankHTML;

        let content_size = Math.round(percent*123.85/100);
        let container_size = 123.85 - content_size;

        d3.select(`#container__${index+1}`)
        .style('height',`${container_size}px`);

        d3.select(`#content__${index+1}`)
        .style('height',`${content_size}px`);
    } );
};

