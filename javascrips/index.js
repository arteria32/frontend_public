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
    cardFilling.classList.add("card-filling"); //!
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
    cardFooterText.textContent = `Уровень керосина в резервуаре №${reservoirNumber}`;
    cardFooter.append(occupancyPercantageText, cardFooterText);
    document.querySelector(".card_list").append(cardItem);
}

function classCardColor(valueWeight = 0) {
    let leftBorder = +document.querySelector(".left-border").textContent;
    let rightBorder = +document.querySelector(".right-border").textContent;
    if (valueWeight >= leftBorder && valueWeight <= rightBorder)
        return "card_border-bottom_green";
    return "card_border-bottom_red";
}

// deleteReservoirs();
createCardItem(550, 10, classCardColor(550));

let createButton = document.querySelector(".download-reservoir");

createButton.addEventListener("click", function (event) {
    deleteReservoirs();
    createCardItem(550, 10, classCardColor(550));
    createCardItem(550, 10, classCardColor(550));
});
