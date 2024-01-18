var registerForm = document.querySelector(".registerForm");
var currency = {};
registerForm.onsubmit = function (e) {
    e.preventDefault();
    var elements = e.target.elements;

    currency = {
        amount: elements[0].value,
        exchange: elements[1].value,
    };

    convert();
}

function convert() {
    var result = "";

    if (currency.exchange == "dollar") {
        result = currency.amount * 3.75;
    } else if (currency.exchange == "dinar") {
        result = currency.amount * 5.29;
    } else {
        result = currency.amount;
    }

    document.querySelector(".result").innerHTML = result;
    console.log(result);
}