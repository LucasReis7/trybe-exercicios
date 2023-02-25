window.onload = () => {
    let selectBack = document.querySelector('select');
    selectBack.addEventListener('change', function() {
        let selectedBack = selectBack.selectedOptions[0];
        document.body.style.backgroundColor = selectedBack.value;

    })
}