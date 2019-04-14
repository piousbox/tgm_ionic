
== Run ==

 ionic cordova run browser --livereload --address localhost.com
 ionic cordova platform rm browser
 ionic cordova platform add browser
 ionic cordova prepare browser
 
 ionic cordova platform rm android
 ionic cordova platform add android
 ionic cordova plugin remove cordova-plugin-googleplus
 ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97 --variable WEB_APPLICATION_CLIENT_ID=287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97.apps.googleusercontent.com
 ic build android --debug
 ionic cordova run android --debug
 ionic cordova run android -l -c -s --debug
 adb logcat
 chrome://inspect/#devices
 ionic cordova build --debug android 
 
 ionic cordova run ios
