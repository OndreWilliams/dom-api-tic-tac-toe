window.addEventListener("DOMContentLoaded", () => {
    let currPlayer = 'X';
    let boardArr = ['', '', '', '', '', '', '', '', ''];
    trackClicks();

    function trackClicks () {
        let board = document.getElementById("tic-tac-toe-board");
        board.addEventListener("click", event => {
            let squareClicked = event.target.id;
            let numOfSquare = Number(squareClicked[squareClicked.length - 1]);
            // console.log(squareClicked);
            // console.log(numOfSquare);
            let img = document.createElement('img');

            if(currPlayer === 'X'){
                img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg`;
                event.target.append(img);
                boardArr[numOfSquare] = currPlayer;
                currPlayer = 'O';
                console.log(boardArr);
            } else{
                img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg`;
                event.target.append(img);
                boardArr[numOfSquare] = currPlayer;
                currPlayer = 'X';
                console.log(boardArr);
            }
        })
    };
});
