let allFuels = document.querySelectorAll('li');
let allProducts = new Map();
let selectedProduct = '0';
let minRange = 200;
let maxRange = 800;
let content = document.querySelector('.content');

function addClickEvents() {
    for (let index = 0; index < allFuels.length; index++) {
        allFuels[index].addEventListener("click", function() {
            let selectorFuel = document.querySelector('.active-selector');
            selectorFuel = selectorFuel.classList.toggle('active-selector');
            this.className = 'active-selector';
            selectedProduct = this.value.toString();
            if (!allProducts.has(selectedProduct)) 
                content.innerHTML = '';
            else {
                content.innerHTML = '';
                content.innerHTML = allProducts.get(selectedProduct);    
            }
                
        });
    }
    document.querySelector('#file-upload').addEventListener("change", function() {
        const reader = new FileReader();
        reader.readAsText(this.files[0]);
        reader.addEventListener('load', e => {
            const tanks = JSON.parse(reader.result).data;
            if (!tanks.length) {
                alert('В данном файле нет резервуаров с нужной структурой. Проверьте правильность выбранного файла');
                return;
            }
            drawTanks(tanks);
            document.querySelector('#file-upload').value = null;
        })
    });

    document.querySelector('#change-theme').addEventListener('click', function() {
        document.querySelector('body').classList.toggle('dark-theme');
        document.querySelector('body').classList.toggle('light-theme');
    });
    
    document.querySelector('#change-range-mass').addEventListener('click', function() {
        let wanted = confirm('После ввода корректного диапазона, все резервуары будут удалены. Продолжить?');
        if (!wanted) {
            return;
        }
        let min = prompt('Введите нижний диапазон массы > 0:');
        let max = prompt('Введите верхний диапазон массы < 1000:');
        if (max > min && min > 0 && max < 1000) {
            minRange = min;
            maxRange = max;
            content.innerHTML = '';
            allProducts.clear();
            document.querySelectorAll('.min-range').forEach(el => {
                el.innerHTML = minRange;
            });
            document.querySelectorAll('.max-range').forEach(el => {
                el.innerHTML = maxRange;
            });
        } else {
            alert('Введены некорректные данные.');
        }
    });
} 

function drawTanks(allTanks) {
    content.innerHTML = '';
    allProducts.delete(selectedProduct);
    allTanks.forEach( (tank, index) => {
        let level = tank.value > minRange && tank.value < maxRange ? 'accept' : 'reject';
        let percent = Math.round(tank.value / maxRange * 100);
        let tankHTML = `
            <div class='tank'>
                <div class='tank__header'>
                    <span> Масса </span>
                    <span class='tank__header-mass'> ${tank.value} </span>
                </div>
                <div class='tank__legend-line ${level}'></div>
                <div class='tank__line'></div>
                <div class='tank__emptiness'>
                    <div class='tank__white-line'></div>
                    <div class='tank__white-line'></div>
                    <div class='tank__white-line'></div>
                    <div id='tank__filling_${index}' class='tank__filling'></div>
                </div>
                <div class='tank__line'></div>
                <div class='tank__level'>
                    <div class='tank__level-percent'>
                        ${percent}%
                    </div>
                    <div class='tank__level-label'>
                        Уровень керосина в резервуаре № ${index}
                    </div>
                </div>
            </div>
        `   
        content.innerHTML += tankHTML;
        d3.select(`#tank__filling_${index}`)
            .append('svg')
            .attr('transform', 'rotate(-180)')
            .style('width','100%')
            .style('height','100%')
            .append('rect')
            .attr('width','100%')
            .attr('height',`${percent}`)
            .style('fill','#0089FF')
    });
    allProducts.set(selectedProduct, content.outerHTML);
}

addClickEvents();
