# td_barn

### Backend
In the backend directory, install the following dependencies:
`$ pip3 install flask flask-socketio pandas`

To start the server, run:
`python3 -m flask --app app.py run`

### Frontend
Assuming node.js is installed, and, assuming all commands to be in the frontend directory:
1. Create an account at http://expo.dev if not already.
2. Download the 'Expo Go' mobile app for running the app on your phone and log in.
3. Run `npm i`.
4. Run `npx expo login -u [expo username] -p [expo password]` to log in to expo locally.
5. Run `npm start`, scan the barcode outputted by the server, and open the link in the Expo Go mobile app.