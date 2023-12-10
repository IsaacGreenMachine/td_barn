from data.pieces import Empty
import json

class Game():
    def __init__(self, id, join_code, board_size=4) -> None:
        self.board = Board()
        self.id = id
        self.join_code = join_code

    def to_json(self):
        game_dict = {
            "id":self.id,
            "join_code":self.join_code,
            "board":self.board.to_json()
        }
        return json.dumps(game_dict)

    def from_json():
        pass


class Board():
    def __init__(self, board_size=4) -> None:
        self.board_size = board_size
        self.board = self.create_board(board_size)

    def create_board(self, size):
        board = []
        for row in range(size):
            row = []
            for col in range(size):
                row.append(Empty(row, col))
            board.append(row)

    def to_json(self):
        json_board = []
        for row in range(self.board_size):
            row = []
            for col in range(self.board_size):
                row.append(self.board[row][col].to_json())
            json_board.append(row)
        return json_board
