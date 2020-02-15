
= Setup =

Add tgm.mac as a domain in your hosts file, on Windows XP it is this file: c:\WINDOWS\system32\drivers\etc\hosts

 127.0.0.1 tgm.mac
 ::1 tgm.mac

Both lines, the ipv4 and ipv6 definitions. should be added.

Run the application:

 ionic cordova run browser --livereload --address tgm.mac --ssl --port 8100

Then go to https://tgm.mac:8100 and click "login" in the sidemenu, you shuold be able to see a text gallery in the newsfeed.

== Develop ==

 router - update version? 7.2.14

 ionic g page pages/dashboard

=== Environment ===
We're using environment `development` if you have backend running on localhost:3001.

```
./node_modules/.bin/ng run app:ionic-cordova-serve:development --host=tgm.mac --port=8100 --ssl --platform=browser
```

Otherwise, the environment is `staging` - that's your local environment, connected to a remote backend.

```
./node_modules/.bin/ng run app:ionic-cordova-serve:staging     --host=tgm.mac --port=8100 --ssl --platform=browser
```

=== Todo ===

* lets deploy on iOS
* lets wire *all* photos to a gallery

=== Debug ===
```
a = localStorage.getItem('current_user')
a = localStorage.getItem('current_user_2')

localStorage.removeItem('current_user')
localStorage.removeItem('current_user_2')
```

== Test ==
 npm run test
 
== Run Browser ==
 alias ic="ionic cordova "

 ic platform rm browser
 ic platform add browser
 ic build browser

 ic run browser --livereload --address tgm.mac --ssl --port 8100
 # frontend devs should do this:
 ./node_modules/.bin/ng run app:ionic-cordova-serve:staging     --host=tgm.mac --port=8100 --ssl --platform=browser
 # backend devs should do this:
 ./node_modules/.bin/ng run app:ionic-cordova-serve:development --host=tgm.mac --port=8100 --ssl --platform=browser
 # do this if you are front/back and have local apache proxy:
 ./node_modules/.bin/ng run app:ionic-cordova-serve:development --host=0.0.0.0 --port=8100 --platform=browser

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

 ic platform rm browser 
 ic platform add browser
 ic build browser --prod

## Run Android
<pre>
 ic run android --debug
 # ic run android -l -c -s --debug
 adb logcat
 chrome://inspect/#devices
</pre>

## Build Android

<pre>
 ic platform rm android
 ic platform add android
 # ic plugin remove cordova-plugin-googleplus
 # ic plugin add cordova-plugin-googleplus \
 #  --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97 \
 #  --variable WEB_APPLICATION_CLIENT_ID=287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97.apps.googleusercontent.com

 ic build android --debug
 ic build android --debug --env=staging
 ic build android --debug --prod
</pre>


