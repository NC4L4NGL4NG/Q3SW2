function getProduct() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    alert("The product is " + (a * b));
}

function getPower() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    alert("a raised to b is " + Math.pow(a, b));
}

function getRemainder() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    alert("The remainder is " + (a % b));
}

function checkEquality() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    if (a === b) {
        alert("a is equal to b");
    } else {
        alert("a is not equal to b");
    }
}
