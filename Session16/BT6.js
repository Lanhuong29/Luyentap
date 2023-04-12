let btn = document.getElementById('btn');
btn.addEventListener('click', function(evt) {
    console.log(evt);
    //Lấy giá trị ở 2 input về
    let a = parseFloat(document.getElementById('numberA').value);
    let b = parseFloat(document.getElementById('numberB').value);

    document.getElementById('result').value = a + b;
})