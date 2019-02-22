
== Develop ==

Wiring navigation

From: https://stackoverflow.com/questions/40245847how-to-go-to-another-page-with-a-button-click-with-ionic/45305605



== Run ==

client id:     287149765762-3biddikajgthdj8h05j4gtjqttn70o76.apps.googleusercontent.com
client secret: 0yxT-gCswPYWJT8AhDtcc6qT

 ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.287149765762-3biddikajgthdj8h05j4gtjqttn70o76 --variable WEB_APPLICATION_CLIENT_ID=287149765762-3biddikajgthdj8h05j4gtjqttn70o76.apps.googleusercontent.com

 ionic cordova run browser --livereload
 ionic cordova platform rm android
 ionic cordova platform add android
 ionic cordova prepare android
 ionic cordova platform rm browser
 ionic cordova platform add browser
 ionic cordova prepare browser


