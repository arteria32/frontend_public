let topLine = 800;
let bottomLine = 200;

function changeBounds() {
    while (true) {
        const topLineValue = prompt('print new top line value');
        if (topLineValue && topLineValue > 0 && topLineValue < 1000) {
            topLine = topLineValue;
            break;
        }
        if (topLineValue === '' || topLineValue === null) {
            break;
        }
    }
    while (true) {
        const bottomLineValue = prompt('print bottom line value');
        if (bottomLineValue && bottomLineValue > 0 && bottomLineValue < 1000) {
            bottomLine = bottomLineValue;
            break;
        }
        if (bottomLineValue === '' || bottomLineValue === null) {
            break;
        }
    }
    rerenderContent();
}

function rerenderContent() {
    document.querySelector('.panel > div.panel__text').textContent = `${bottomLine} < МАССА < ${topLine}`;
    const secondLegend = document.querySelectorAll('.panel > div:last-child div.panel__text');
    secondLegend[0].textContent = `МАССА < ${bottomLine}`
    secondLegend[1].textContent = `МАССА > ${topLine}`
    uploadData();
}

function readTextFile(file) {
    return new Promise((resolve) => {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onload = () => {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                resolve(rawFile.responseText);
            }
        }
        rawFile.send(null);
    });
}

async function uploadData() {
    const reservoirsJson = await readTextFile("reservoirs.json");
    let reservoirs = JSON.parse(reservoirsJson);
    const contentDiv = document.getElementsByClassName('content')[0];
    contentDiv.innerHTML = '';
    for (let i = 0; i < reservoirs.length; i++) {
        const cardDiv = createReservoirCard(reservoirs[i]);
        contentDiv.append(cardDiv);
    }
}

function createReservoirCard(reservoir) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card'
    const weightContainer = createWeightContainer(reservoir.volume);
    cardDiv.append(weightContainer);
    const indicator = createDiv('card__indicator');
    indicator.classList.add((reservoir.volume > bottomLine && reservoir.volume < topLine) ? 'card__indicator_green' : 'card__indicator_red');
    cardDiv.append(indicator);
    const line = createDiv('card__line');
    cardDiv.append(line);
    const tankLevelContainer = createTankLevelContainer(reservoir.volume);
    cardDiv.append(tankLevelContainer);
    cardDiv.append(line);
    const footer = createFooter(reservoir);
    cardDiv.append(footer);
    return cardDiv;
}

function createWeightContainer(volume) {
    const weightContainerDiv = createDiv('card__weight-container');
    const weightContainerTitle = createDiv('card__weight-container__title');
    weightContainerTitle.append(createParagraph('Масса'));
    weightContainerDiv.append(weightContainerTitle);
    const weightContainerValue = createDiv('card__weight-container__value');
    weightContainerValue.append(volume);
    weightContainerDiv.append(weightContainerValue);
    return weightContainerDiv;
}

function createTankLevelContainer(volume) {
    const tankLevelContainerDiv = createDiv('card__tank-level-container');
    const content = createDiv('card__tank-level-container__content');
    content.style.height = getVolumePercent(volume);
    tankLevelContainerDiv.append(content);
    for (let i = 0; i < 3; i++) {
        const line = createDiv('card__tank-level-container__line');
        tankLevelContainerDiv.append(line);
    }
    return tankLevelContainerDiv;
}

function createFooter(reservoir) {
    const footer = createDiv('card__footer');
    const percent = createDiv('card__footer__percent');
    percent.append(createParagraph(getVolumePercent(reservoir.volume)));
    footer.append(percent);
    const description = createDiv('card__footer__description');
    description.append(createParagraph(`Уровень керосина в ${reservoir.name}`));
    footer.append(description);
    return footer;
}

function createDiv(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function getVolumePercent(volume) {
    return `${volume / 1000 * 100}%`;
}
