function chessBoard(n) {
    n = Number(n);
    let currentColour = 'black';
    let previousColour = '';

    console.log('<div class="chessboard">');

    for (let rows = 1; rows <= n; rows++) {
        console.log('  <div>');

        for (let columns = 1; columns <= n; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);

            previousColour = currentColour;
            currentColour = previousColour === 'black' ? 'white' : 'black';
        }

        console.log('  </div>');

        if (n % 2 === 0) {
            previousColour = currentColour;
            currentColour = previousColour === 'black' ? 'white' : 'black';
        }
    }

    console.log('</div>');
}