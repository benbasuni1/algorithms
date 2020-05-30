class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
      # left, right, up, down
      count = [0, 0, 0, 0]
      limits = [0, 9, 9, 0]
      pawns = []
      bishops = []
      rookRow = 0
      rookCol = 0

      # detect Rook Bishops and Pawns
      for x, rows in enumerate(board):
        for y, columns in enumerate(rows):
          current = board[x][y]
          if current == 'R':
            [rookRow, rookCol] = [x, y]
          elif current == 'p':
            pawns.append([x, y])
          elif current == 'B':
            bishops.append([x, y])

      # Look all directions and see if there are bishops and set limits
      for val in bishops:
        for left in range(rookRow -1, 0, -1):
          if val[0] == left and rookCol == val[1]:
            limits[0] = left
        for right in range(rookRow + 1, 9):
          if val[0] == right and rookCol == val[1]:
            limits[1] = right
        for up in range(rookCol + 1, 9):
          if rookRow == val[0] and val[1] == up:
            limits[2] = up
        for down in range(rookCol - 1, 0, -1):
          if rookRow == val[0] and val[1] == down:
            limits[3] = down

      # Look all directions and see if there are any pawns
      for val in pawns:
        for left in range(rookRow -1, limits[0], -1):
          if val[0] == left and rookCol == val[1]:
            count[0] = 1
            break
        for right in range(rookRow + 1, limits[1]):
          if val[0] == right and rookCol == val[1]:
            count[1] = 1
            break
        for up in range(rookCol + 1, limits[2]):
          if rookRow == val[0] and val[1] == up:
            count[2] = 1
            break
        for down in range(rookCol - 1, limits[3], -1):
          if rookRow == val[0] and val[1] == down:
            count[3] = 1
            break

      return sum(count)



