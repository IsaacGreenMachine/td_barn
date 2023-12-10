import random
from pathlib import Path
from data.board import Game
import json
import pandas as pd

games_df = pd.DataFrame(columns=["id", "join_code", "board"])

def setup():
    pass

def generate_join_code(code_length):
    all_join_codes = games_df['join_code'].tolist()
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    flag = False
    while flag == False:
        code = ""
        for digit in range(code_length):
            code += random.choice(letters)
        if code not in all_join_codes:
            flag = True
    return code

def create_game(id):
    game_ids = games_df['id'].tolist()
    if id in game_ids:
        print(f"TRIED TO CREATE GAME {id}, BUT ALREADY EXISTS")
        return -1
    join_code = generate_join_code(code_length=5)
    games_df.loc[len(games_df.index)] = [id, join_code, Game(id, join_code)]
    return join_code

def check_game_id_exists(id):
    all_game_ids = games_df['id'].tolist()
    return id in all_game_ids

def get_game(id):
    game = games_df[games_df['id'] == id].iloc[0]
    return game

def get_all_games():
    return games_df['id'].tolist()
