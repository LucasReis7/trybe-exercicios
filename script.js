window.onload = () => {
    let selectBack = document.querySelector('select');
    selectBack.addEventListener('change', function() {
        let selectedBack = selectBack.selectedOptions[0];
        document.body.style.backgroundColor = selectedBack.value
        localStorage.setItem('backSave',document.body.style.backgroundColor);
    })

    let selectFont = document.querySelector('#font-color');
    selectFont.addEventListener('change', function () {
        let selectedFont = selectFont.selectedOptions[0];
        document.body.style.color = selectedFont.value
        localStorage.setItem('fontSave', document.body.style.color);
    })

    let selecSize =document.querySelector('input[name="font-size"]');
    selecSize.addEventListener('change', function () {
        document.querySelector('p').style.fontSize = `${selecSize.value}px`
        localStorage.setItem('sizeSave',document.querySelector('p').style.fontSize);
    })

    let selectHeight = document.querySelector('input[name="font-height"]');
    selectHeight.addEventListener('change', function() {
        document.querySelector('p').style.lineHeight = `${selectHeight.value}px`
        localStorage.setItem('heightSave',document.querySelector('p').style.lineHeight);
    })

   // let selectType = document.querySelector('#font-type');
   // selectType.addEventListener('change', function () {
   //     let selectedType = selectType.selectedOptions[0];
   //     document.querySelector('p').fon
   // })

    let load1 = localStorage.getItem('backSave');
    document.body.style.backgroundColor = load1;

    let load2 = localStorage.getItem('fontSave');
    document.body.style.color = load2;

    let load3 = localStorage.getItem('sizeSave');
    document.querySelector('p').style.fontSize = load3;

    let load4 = localStorage.getItem('heightSave');
    document.querySelector('p').style.lineHeight = load4;
















}