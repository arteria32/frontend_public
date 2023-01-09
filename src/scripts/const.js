export const headerButton = document.querySelector(".header__btn");

export const uploadButton = document.querySelector(".header__upload-btn");

export const reservoirContainer = document.querySelector(
  ".main__cistern-container"
);

export const changeFrontiersButton = document.createElement("button");

changeFrontiersButton.classList.add("list__btn", "main__btn");
changeFrontiersButton.textContent = "Изменить границы";

export const weightFrontiers = Array.from(
  document.querySelectorAll(".main__input")
);
