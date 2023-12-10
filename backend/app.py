from flask import Flask
from flask_socketio import SocketIO, send
import td_ops

td_ops.setup()
app = Flask(__name__)
socketio = SocketIO(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/games")
def show_games():
    return td_ops.get_all_games()


@app.route("/games/<game_id>")
def get_game(game_id):
    if not td_ops.check_game_id_exists(game_id):
        td_ops.create_game(game_id)
    return td_ops.get_game(game_id).to_json()

@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)
    send(f"WOAH WHAT A COOL MESSAGE THIS IS -> {message}")
