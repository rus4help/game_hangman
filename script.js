var words = [
    "мама",
    "папа",
    "сын",
    "брат",
    "сестра",
    "бабушка",
    "дедушка"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
var countAttempt = word.length + 3;

while (remainingLetters > 0 && countAttempt > 0) {

    alert("У вас осталось " + countAttempt + " попыток");
    alert(answerArray.join(" "));

    var guess = prompt("Угадай букву или нажми Отмена  для выхода из игры.");

    countAttempt--;

    if (guess === null) {
        alert("Возвращайтесь снова!");
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
        countAttempt++;
    } else {

        guess.toLowerCase();

        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] !== guess) {
                answerArray[j] = guess;
                remainingLetters--;
                alert("Вы угадали букву!");
            } else if (answerArray[j] === guess) {
                countAttempt++;
                alert("Вы уже вводили эту букву. Будьте внимательны!")
            }
        }
    }

}

alert(answerArray.join(" ").toUpperCase());
alert("Было загадно слово - " + word.toUpperCase());