//Получите атрибут
//важность: 5
//Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
console.log(document.querySelector('div[data-widget-name]').dataset.widgetName)


// Сделайте внешние ссылки оранжевыми
// важность: 3
// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
//
//     Ссылка является внешней, если:
//
// Её href содержит ://
//     Но не начинается с http://internal.com.

// добавление стиля для одной ссылки
let links = document.querySelectorAll('a');
for (let link of links) {
    const href = link.getAttribute('href');
    if (href != null && href.includes('://') && !href.includes('http://internal.com')) {
        link.style.color = 'orange';
    }
}
