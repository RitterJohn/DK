
function func(ziel, N) {
    for (i = 0; i < N; i++){
        let user_attemp = prompt('Введите число')
        if (user_attemp == null || isNaN(user_attemp)) {
            return 2;
        }
        else if (user_attemp > ziel) {
            alert(`Загаданное число меньше. Осталось попыток: ${N - i - 1}`);
        }
        else if (user_attemp < ziel) {
            alert(`Загаданное число больше. Осталось попыток: ${N - i - 1}`);
        }
        else {
            alert("Победа!");
            return 1;
        }
        if (i == N - 1) {
            return 0;
        }
    }
}

function game() {

    let max_value;
    let N;

    if (document.getElementById("r1").checked) {
        max_value = 10;
        N = 5;
    }
    if (document.getElementById("r2").checked) {
        max_value = 100;
        N = 7;
    }
    if (document.getElementById("r3").checked) {
        max_value = 1000;
        N = 12;
    }

    let a = true;
    let f_check = 0;

    while (a == true) {
        let ziel = 1 + Math.floor(Math.random() * max_value);
        console.log(ziel);
        f_check = func(ziel, N);

        if (f_check == 0) {
            a = confirm(`Попытки закончились. Загаднное число: ${ziel}. Сыграть ещё?`);
        }
        else if (f_check == 2) {
            a = confirm("Ошибка ввода. Сыграть ещё?");
        }
        else {
            a = false;
        }
    }
}
