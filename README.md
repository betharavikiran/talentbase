Fix for issues:

Make a folder in the below path:
       android/app/src/main/assets

   1 a) react-native link 


react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

   2) Clean up Watchman using below commands
      watchman watch-del-all
      watchman shutdown-server

   3) react-native run-android
