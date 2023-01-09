"use strict";

function deleteReservoirs() {
    for (let card of document.querySelectorAll(".card_item")) {
        card.remove();
    }
}

function createCardItem(
    valueWeight = 0,
    reservoirNumber = 1,
    cardColorClass = "card_border-bottom_red"
) {
    // элемент списка резервуаров
    let cardItem = document.createElement("li");
    cardItem.className = "card_item";

    // оболочка карточки резервуара
    let cardWrapper = document.createElement("div");
    cardWrapper.className = "card-wrapper";
    cardItem.append(cardWrapper);

    //блок BODY карточки
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardWrapper.append(cardBody);

    // HEADER карточки
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header", cardColorClass);
    cardBody.append(cardHeader);

    // body HEADER карточки
    let weightWord = document.createElement("p");
    weightWord.className = "weight-word";
    weightWord.textContent = "Масса";
    let weightValue = document.createElement("p");
    weightValue.className = "weight-value";
    weightValue.textContent = valueWeight;
    cardHeader.append(weightWord, weightValue);

    // MAIN карточки резервуара
    let cardMain = document.createElement("div");
    cardMain.classList.add("card-main");
    cardBody.append(cardMain);

    // body MAIN карточки
    let cardFilling = document.createElement("div");
    cardFilling.classList.add("card-filling");
    cardFilling.style.height = valueWeight / 10 + "%";
    let halfPercentLine = document.createElement("p");
    halfPercentLine.className = "half-percent-line";
    cardMain.append(
        cardFilling,
        halfPercentLine,
        halfPercentLine.cloneNode(true),
        halfPercentLine.cloneNode(true)
    );

    // блок FOOTER карточки
    let cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    cardWrapper.append(cardFooter);

    // Заполнение FOOTER
    let occupancyPercantageText = document.createElement("p");
    occupancyPercantageText.className = "occupancy_percantage_text";
    occupancyPercantageText.textContent = `${valueWeight / 10}%`;
    let cardFooterText = document.createElement("p");
    cardFooterText.className = "card-footer-text";
    cardFooterText.textContent = `Уровень керосина в резервуаре №${reservoirNumber}`; //!
    cardFooter.append(occupancyPercantageText, cardFooterText);
    document.querySelector(".card_list").append(cardItem);
}

function classCardColor(valueWeight = 0) {
    if (valueWeight >= leftDefaultVolumeValue && valueWeight <= rightDefaultVolumeValue)
        return "card_border-bottom_green";
    return "card_border-bottom_red";
}

function loadFile(url) {
    return new Promise((resolve, reject) => {
        let file = new XMLHttpRequest();
        file.open("GET", url);
        file.responseType = "json";
        file.onload = () => {
            resolve(file.response);
        };
        file.send();
    });
}

async function createFromData() {
    const reservoirsData = await loadFile("information_about_reservoir.json");
    for (let reservoir of reservoirsData) {
        let reservNumber = reservoir.name.slice(-1);
        let reservVolume = reservoir.volume;
        createCardItem(reservVolume, reservNumber, classCardColor(reservVolume));
    }
}

let leftDefaultVolumeValue = +document.querySelector(".input-left-border").getAttribute("value");
let rightDefaultVolumeValue = +document.querySelector(".input-right-border").getAttribute("value");

let createButton = document.querySelector(".download-reservoir");

createButton.addEventListener("click", async function (event) {
    deleteReservoirs();
    createFromData();
}); //TODO

let changeColorButton = document.querySelector(".change-borders");

changeColorButton.addEventListener("click", function (event) {
    let leftBorder = +document.querySelector(".input-left-border").value;
    let rightBorder = +document.querySelector(".input-right-border").value;
    if (
        leftBorder >= rightBorder ||
        rightBorder > 1000 ||
        leftBorder < 0 ||
        isNaN(leftBorder) ||
        isNaN(rightBorder)
    ) {
        alert(
            "НЕПРАВИЛЬНЫЕ ДАННЫЕ, ЛЕВАЯ ГРАНИЦА ДОЛЖНА БЫТЬ МЕНЬШЕ ПРАВОЙ, ПРАВАЯ НЕ ДОЛЖНА ПРЕВЫШАТЬ 1000, ЛЕВАЯ НЕ ДОЛЖНА БЫТЬ МЕНЬШЕ НУЛЯ"
        );
        document.querySelector(".input-left-border").value = leftDefaultVolumeValue;
        document.querySelector(".input-right-border").value = rightDefaultVolumeValue;
        return;
    }

    leftDefaultVolumeValue = leftBorder;
    rightDefaultVolumeValue = rightBorder;
    document.querySelector(".input-left-border").setAttribute("value", leftBorder);
    document.querySelector(".input-left-border").value = leftBorder;
    document.querySelector(".input-right-border").value = rightBorder;
    let leftSpans = document.querySelectorAll(".left-border");
    let rightSpans = document.querySelectorAll(".right-border");
    for (let leftSpan of leftSpans) {
        leftSpan.textContent = leftBorder;
    }
    for (let rightSpan of rightSpans) {
        rightSpan.textContent = rightBorder;
    }

    let cardHeaders = document.querySelectorAll(".card-header");
    for (let cardHead of cardHeaders) {
        let reservoirVolume = +cardHead.querySelector(".weight-value").textContent;
        cardHead.classList.remove(cardHead.classList[1]);
        cardHead.classList.add(classCardColor(reservoirVolume));
    }
});
