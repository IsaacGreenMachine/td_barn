# td_barn

### Backend
Install the following dependencies in the backend directory:
`$ pip3 install flask flask-socketio pandas`

Run with the following:
`python3 -m flask --app app.py run`

### Frontend
Assuming node.js is installed:
1. Run `npm i` in the frontend directory.
2. Create an account at http://expo.dev if not already.
3. Run `npx expo login -u [expo username] -p [expo password]` to log in to expo locally (frontend directory).
4. Download the 'Expo Go' mobile app for running the app on your phone.
5. Run `npm start`, scan the barcode printed by the server on your phone, and open in the Expo Go app.
<br />
To reload changes, shake the phone and select 'Reload JS Bundle'.