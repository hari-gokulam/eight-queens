# eight-queens
Solution for classic 8 queens problem

Each row should have one queen, and each column should have one queen. Also, we must ensure that these queens do not attack diagonally.

The process starts with a queen in the first row, first column. Then proceed to the next row and identify a safe column to place the next queen. Repeat the process in the next row and so forth. If we are unable to place a queen in a row, we must take a step back and locate the next possible column in the preceding row, before continuing. Continue in this manner until we manage to place the queens in all eight rows.

I am not using any python libraries. You just need to have python installed on your machine to run it,

Run the following command to see the results

python main.py
