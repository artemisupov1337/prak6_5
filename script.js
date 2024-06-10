document.getElementById('sum-form').addEventListener('submit', function(event) {
    // Забороняємо браузеру перезавантажувати сторінку після відправки форми
    event.preventDefault();

    // Отримуємо введені користувачем числа
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Обчислюємо суму
    const sum = num1 + num2;

    // Виводимо результат у діалоговому вікні
    alert(`Сума чисел: ${sum}`);
});