
== Develop ==

 https://s3.amazonaws.com/tgm-videos/MVI_0061_out.webm

 router - update version? 7.2.14

== Test ==
 npm run test
 
== Run ==

 ic platform rm browser
 ic platform add browser
 ic build browser
 ic run browser --livereload --address localhost.com

 ic platform rm android
 ic platform add android
 # ic plugin remove cordova-plugin-googleplus
 # ic plugin add cordova-plugin-googleplus \
 #  --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97 \
 #  --variable WEB_APPLICATION_CLIENT_ID=287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97.apps.googleusercontent.com
 ic build android --debug
 ic build android --debug --env=staging
 ic build android --debug --prod
 ic run android --debug
 # ic run android -l -c -s --debug
 adb logcat
 chrome://inspect/#devices
 
 ionic cordova run ios

