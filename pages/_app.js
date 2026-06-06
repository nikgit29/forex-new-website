import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import firebase from "../Component/Firebase/Firebase";
import storage from "../Component/Redux/storage";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import Cookies from "universal-cookie";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import "firebase/messaging";
import axios from "axios";
import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";

function MyApp({ Component, pageProps }) {
  const cookies = new Cookies();
  useEffect(() => {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {});
    getToken(messaging, {
      vapidKey:
        "BDSi7ffwxPyZ9PFEActmVpvDSWYDGU0BQSMVhU19EVML97fYFR-g0lB7xLdknLpCeRscb2xKAoHtAmH5YsBek8Y",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log("Got FCM device token:", currentToken);
          localStorage.setItem("__fbsToken", currentToken);
          cookies.set("__fbsStatus", true);
          // Saving the Device Token to Cloud Firestore.
          const tokenRef = doc(getFirestore(), "fcmTokens", currentToken);
          setDoc(tokenRef, { uid: getAuth().currentUser.uid });
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  }, []);

  // useEffect(() => {
  //   async function saveMessagingDeviceToken() {
  //     try {
  //       const currentToken = await getToken(getMessaging(), {
  //         vapidKey:
  //           "BDSi7ffwxPyZ9PFEActmVpvDSWYDGU0BQSMVhU19EVML97fYFR-g0lB7xLdknLpCeRscb2xKAoHtAmH5YsBek8Y",
  //       });
  //       if (currentToken) {
  //         console.log("Got FCM device token:", currentToken);
  //         localStorage.setItem("__fbsToken", currentToken);
  //         const user = getAuth().currentUser;
  //         if (user) {
  //           // Saving the Device Token to Cloud Firestore.
  //           const tokenRef = doc(getFirestore(), "fcmTokens", currentToken);
  //           setDoc(tokenRef, { uid: getAuth().currentUser.uid });
  //         }

  //         // This will fire when a message is received while the app is in the foreground.
  //         // When the app is in the background, firebase-messaging-sw.js will receive the message instead.
  //         onMessage(getMessaging(), (message) => {
  //           console.log(
  //             "New foreground notification from Firebase Messaging!",
  //             message.notification
  //           );
  //         });
  //       } else {
  //         // Need to request permissions to show notifications.
  //         requestNotificationsPermissions();
  //       }
  //     } catch (error) {
  //       console.error("Unable to get messaging token.", error);
  //     }
  //   }

  //   saveMessagingDeviceToken();
  // }, []);
  const design = (
    <>
      <Provider store={storage}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
  return design;
}

export default MyApp;
