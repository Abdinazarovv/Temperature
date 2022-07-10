var elTempForm = document.querySelector('.temp__form');
var elTempOutput = document.querySelector('.temp__output');

elTempForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var elTempInput = parseFloat(document.querySelector('.temp__input').value.trim(), 10);

    if (isNaN = (elTempInput)) {
        var tempResult = (elTempInput * (9 / 5) + 32).toFixed(1);
        elTempOutput.value = tempResult;
    } else {
        elTempOutput.value = ('Only numbers')
    }

    if (elTempInput < 0) {
        document.body.classList = ('bg-info');
    } else if (elTempInput < 20) {
        document.body.classList = ('bg-warning');
    } else {
        document.body.classList = ('bg-danger');
    }

    let btnClear = document.querySelector('i');
    let inputs = document.querySelectorAll('input');

    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');
    })
})

