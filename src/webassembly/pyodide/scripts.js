function createBoard(boardId) {
    const resultsElement = document.getElementById('results');
    const resultsFragment = document.createDocumentFragment();

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const sId = boardId + i + j;
            const bg = (i + j) % 2 === 0 ? 'white' : 'black';
            const cellDiv = document.createElement('div');
            cellDiv.id = sId;
            cellDiv.className = `cell ${bg}`;
            resultsFragment.appendChild(cellDiv);
        }
    }

    const chessboardDiv = document.createElement('div');
    chessboardDiv.id = boardId;
    chessboardDiv.className = 'chessboard';
    chessboardDiv.appendChild(resultsFragment);

    resultsElement.appendChild(chessboardDiv);
}

function addQueen(boardId, r, c) {
    const cellId = boardId + r + c;
    const elem = document.getElementById(cellId);
    elem.innerHTML = '&#9819;'; //'♕'; // Using a queen chess symbol instead of the HTML entity.
}
async function fetchAndLoadPythonScript(pyodide) {
    console.log("Fetching Python script...");

    const response = await pyodide.runPythonAsync(`
        from pyodide.http import pyfetch
        response = await pyfetch('/chess.py')
        with open('chessscript.py', "wb") as f:
            f.write(await response.bytes())
    `);

    console.log("Python script fetched and loaded successfully.");
}

async function runPython() {
    console.log("runPython");
    const loader = document.getElementById('loader');
    loader.style = "display: block";

    const pyodide = await loadPyodide();
    await fetchAndLoadPythonScript(pyodide);

    pkg = pyodide.pyimport("chessscript")
    const results = pkg.get_positions();
    //const results = await pyodide.runPythonAsync("chessscript.get_positions()");
    const resArray = JSON.parse(results.toString()); //pyodide.toJs(results);

    for (const [index, solution] of resArray.entries()) {
        const boardId = 'sol' + index;
        createBoard(boardId);

        for (const [x, y] of solution.entries()) {
            addQueen(boardId, x, y);
        }
    }
    loader.style = "display:none";
}

