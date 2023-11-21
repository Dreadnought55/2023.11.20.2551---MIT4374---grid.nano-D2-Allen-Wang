document.addEventListener("DOMContentLoaded", () => {

    // Retrieve image of the day
    const imgElement = document.getElementById("puzzleGrid");
    imgElement.src = "testGrid1.png";

    // Define correct guesses for the image
    const horizontalCorrectWord = "weight";
    const verticalCorrectWord = "intention";

    // Retrieve response area
    const result = document.getElementById("result");

    // Retrieve interactive text boxes
    const horizontalGuessTextBox = document.getElementById("horizontalGuessTextBox");
    const verticalGuessTextBox = document.getElementById("verticalGuessTextBox");

    document.getElementById("test").addEventListener("click", test);
    function test() {
    }

    document.getElementById("submitGuesses").addEventListener("click", testGuesses);
    document.getElementById("showCorrectWords").addEventListener("click", showCorrectWords);

    // When you click on the "check my guesses!" button...
    function testGuesses() {
        let isHorizontalGuessCorrect = horizontalGuessTextBox.value.trim().toLowerCase() === horizontalCorrectWord;
        let isVerticalGuessCorrect = verticalGuessTextBox.value.trim().toLowerCase() === verticalCorrectWord;

        if (isHorizontalGuessCorrect && isVerticalGuessCorrect) {
            result.textContent = "You got it right!";
        } else if (isHorizontalGuessCorrect) {
            result.textContent = "You got the horizontal guess right!";
        } else if (isVerticalGuessCorrect) {
            result.textContent = "You got the vertical guess right!";
        } else {
            result.textContent = "You got neither guess right!";
        }
    }

    // When you click on the "I give up!" button...
    function showCorrectWords() {
        result.textContent = `The correct words were ${horizontalCorrectWord} and ${verticalCorrectWord}.`;
    }
});