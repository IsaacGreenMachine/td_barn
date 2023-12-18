from flask import Flask, request
from flask_socketio import SocketIO, send
import td_ops

td_ops.setup()
app = Flask(__name__)

socketio = SocketIO(app, logger=True, engineio_logger=True, cors_allowed_origins=['http://localhost:19006'])

if __name__ == '__main__':
    socketio.run(app, debug=True)

@app.route("/")
def home():
    pass

@app.route("/games")
def show_games():
    return td_ops.get_all_games()


@app.route("/games/<game_id>")
def get_game(game_id):
    if not td_ops.check_game_id_exists(game_id):
        td_ops.create_game(game_id)
    return td_ops.get_game(game_id).to_json()

@socketio.on('connect')
def handle_connect():
    print("Client connected!")

@socketio.on('message')
def handle_message(message):
    # print('received message: ' + message['data'])
    send(f"WOAH WHAT A COOL MESSAGE THIS IS -> {message}")

@socketio.on_error_default  # handles all namespaces without an explicit error handler
def default_error_handler(e):
    # print(request.event["message"])
    # print(request.event["args"])
    # print(e)
    pass
