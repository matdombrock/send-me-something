#! /bin/bash

cd front
npm run build
cd ..
cp -r front/dist/* back/view/


read -n 1 -r -s -p $'Press enter to continue...\n'


