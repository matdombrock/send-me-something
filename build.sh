#! /bin/bash

cd vue
npm run build
cd ..
cp -r vue/dist/* app/view/


read -n 1 -r -s -p $'Press enter to continue...\n'


