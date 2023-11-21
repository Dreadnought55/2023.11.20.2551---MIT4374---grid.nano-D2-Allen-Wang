document.addEventListener("DOMContentLoaded", () => {

    // Retrieve image of the day based on # weeks since 2023.11.19
    const imgNameList = [
        "Week 1.png",
        "Week 2.png",
        "Week 3.png",
        "Week 4.png",
        "Week 5.png"
    ]
    function getWeeksSince(dateString) {
        // This function calculates # of weeks since
        const startDate = new Date(dateString);
        const currentDate = new Date();
        const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
        const weeksSince = Math.floor((currentDate - startDate) / millisecondsPerWeek);
        return weeksSince;    
    }
    function pickImgName() {
        const weeksSince = getWeeksSince("2023-11-19");
        const imgName = imgNameList[weeksSince % imgNameList.length];
        return imgName;
    }
    const imgElement = document.getElementById("puzzleGrid");
    imgElement.src = pickImgName();

    // Define correct guesses for the image
    const horizontalCorrectWord = "weight";
    const verticalCorrectWord = "intention";

    // Retrieve response area
    const result = document.getElementById("result");

    // Retrieve interactive text boxes
    const horizontalGuessTextBox = document.getElementById("horizontalGuessTextBox");
    const verticalGuessTextBox = document.getElementById("verticalGuessTextBox");


    document.getElementById("submitGuesses").addEventListener("click", testGuesses);
    document.getElementById("showCorrectWords").addEventListener("click", showCorrectWords);

    // Write clues
    const horizontalClue = document.getElementById("horizontalClue");
    const verticalClue = document.getElementById("verticalClue");
    horizontalClue.textContent = "Word is " + horizontalCorrectWord.length + " letters long";
    verticalClue.textContent = "Word is " + verticalCorrectWord.length + " letters long";

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