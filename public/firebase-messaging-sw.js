importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCpWd10gDI9IJu4AApaLEsJmaTJPMQa0j8",
  authDomain: "forexblues-7ff26.firebaseapp.com",
  databaseURL: "https://forexblues-7ff26.firebaseio.com",
  projectId: "forexblues-7ff26",
  storageBucket: "forexblues-7ff26.appspot.com",
  messagingSenderId: "279688203885",
  appId: "1:279688203885:web:79594568e7e75209cdb964",
  measurementId: "G-KDNJF6ZF9M",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload.data.message
  );

  const notificationTitle = payload.data.message;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/favicon.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
