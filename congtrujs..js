function CONG() {
    let A = parseFloat(document.getElementById("ONE").value);
    let B = parseFloat(document.getElementById("TOW").value);
    let C = A + B;
    document.getElementById("kq").innerHTML = C;
}
function TRU() {
        let A = document.getElementById("ONE").value;
        let B = document.getElementById("TOW").value;
        let C = A - B;
    document.getElementById("kq").innerHTML= C;
}