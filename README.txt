
== Develop ==

 https://s3.amazonaws.com/tgm-videos/MVI_0061_out.webm

 router - update version? 7.2.14

== Todo ==

* lets deploy on iOS
* lets wire *all* photos to a gallery

== Test ==
 npm run test
 
== Run ==

 ic platform rm browser
 ic platform add browser
 ic build browser
 ic run browser --livereload --address tgm.piousbox.com --port=8100
 ng run app:ionic-cordova-serve:production --host=0.0.0.0 --port=8100 --platform=browser
 ./node_modules/.bin/ng run app:ionic-cordova-serve:staging --host=0.0.0.0 --port=8100 --platform=browser
 
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
 
 ic run ios
 ic run browser --livereload
 
== Build iOS ==
From: https://github.com/jeduan/cordova-plugin-facebook4/tree/master/docs/ios

 ic platform rm ios
 ic platform add ios # @^5.0.0
 ic plugin remove cordova-plugin-facebook4 --save
 ic plugin add cordova-plugin-facebook4 --variable APP_ID="3016949928380365" --variable APP_NAME="tgm.piousbox.com"
 # open xcode and sign the project for your team
 ic build ios -- --buildFlag="-UseModernBuildSystem=0"
 ./node_modules/.bin/ng run app:ionic-cordova-build:staging --platform=ios

 ic run ios -l --address=0.0.0.0
 ./node_modules/.bin/ng run app:ionic-cordova-serve:staging --host=0.0.0.0 --port=8101 --platform=ios


 ## ionic cordova prepare ios
 ./node_modules/.bin/ng run app:ionic-cordova-build:staging --platform=ios
 ./node_modules/.bin/cordova prepare ios

== Deploy browser ==
From: https://www.techrepublic.com/article/how-to-enable-ssl-on-nginx/

 sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
 
 ic plugin remove cordova-plugin-facebook4 --save
 ic plugin add cordova-plugin-facebook4 --variable APP_ID="3016949928380365" --variable APP_NAME="tgm.piousbox.com"

 ic plugin remove cordova-plugin-googleplus --save
 
 ionic cordova build browser

 ic platform rm browser 
 ic platform add browser
 ic build browser




-=----- 
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/tgm.piousbox.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/tgm.piousbox.com/privkey.pem
   Your cert will expire on 2020-01-28. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
   
