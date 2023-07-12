"""Module to test the 8 queens solution"""
import chess

solutions = []


# display the solution as-and-when it is found
def show():
    """Display the results in a readable form"""
    index = 0
    for sol in solutions:
        board = [[0] * 8 for _ in range(8)]
        index += 1
        print(index, '--------------------- ', sol)
        for i in range(8):
            board[i][sol[i]] = 1

        for i in board:
            print(i)


solutions = chess.get_positions()
show()
