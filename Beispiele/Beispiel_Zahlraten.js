document.getElementById('raten').onclick = function() {
    let zahl = document.getElementById('zahl').value;
    let result = document.querySelector(".raten");
    if (isNaN(zahl)) {
        result.innerHTML = 'Eingabe ' + zahl + ' ist keine Zahl!';
    } else {
        if (zahl < 50) {
            result.innerHTML = zahl + ' ist zu klein!';
        } else if (zahl > 50) {
            result.innerHTML = zahl + ' ist zu groß';
        } else {
            result.innerHTML = 'Bingo!';
        }
    }
}