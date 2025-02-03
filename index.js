const textBox = document.getElementById("textbox")
const mySubmit = document.getElementById("mySubmit")
const usd = document.getElementById('dollar')
const ruble = document.getElementById("ruble")
const result = document.getElementById("sum")
let uzbsum;

mySubmit.onclick = function (e){
    
    if (usd.checked) {
        uzbsum = Number(textBox.value)
        uzbsum = uzbsum * 12700;
        result.textContent = `Qiymat ${uzbsum} so'mga teng`    
    }
    else if (ruble.checked) {
        uzbsum = Number(textBox.value)
        uzbsum = uzbsum * 135;
        result.textContent = `Qiymat ${uzbsum} so'mga teng`
    }
    else {
        result.textContent = "Ruble yoki USD tanlang!";
    }
    
    e.preventDefault();
}
