window.onload = () => {
    let selectBack = document.querySelector('select');
    selectBack.addEventListener('change', function() {
        let selectedBack = selectBack.selectedOptions[0];
        document.body.style.backgroundColor = selectedBack.value
    })

    let selectFont = document.querySelector('#font-color');
    selectFont.addEventListener('change', function () {
        let selectedFont = selectFont.selectedOptions[0];
        document.body.style.color = selectedFont.value
    })

    let selecSize =document.querySelector('input[name="font-size"]');
    selecSize.addEventListener('change', function () {
        document.querySelector('p').style.fontSize = `${selecSize.value}px`
        console.log(selecSize);
    })

    let selectHeight = document.querySelector('input[name="font-height"]');
    selectHeight.addEventListener('change', function() {
        document.querySelector('p').style.lineHeight = `${selectHeight.value}px`
        console.log(selectHeight);
    })

















}