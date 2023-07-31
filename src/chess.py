"""Solving 8 queens problem """
INDEX = 8  # size of the board

# array to store a solution. This gets overwritten after adding the solution to the list.
# index represents the row and the value represents the column
solution = [[-1] for _ in range(INDEX)]
solution_list = []  # list of solutions


# check whether the current position is safe or not
def is_safe(row, col):
    """Check whether it is safe to place the queen"""

    # check previous rows where we have already placed queens
    for k in range(0, row):
        # check row and column
        if (k == row) or (solution[k] == col):
            return False
        # check diagonal positions
        if (row - k) == (col - solution[k]) or (row - k) == (solution[k] - col):
            return False
    return True


# solve a row at a time
def solve(row):
    """Solve one row"""
    if row == INDEX:  # we have a solution, add it to the list
        solution_list.append(solution.copy())
        return

    for col in range(INDEX):
        # print(row, col)
        if is_safe(row, col):
            solution[row] = col
            solve(row + 1)

def get_positions():
    """Get positions"""
    solve(0)
    return solution_list
