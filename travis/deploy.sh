#!/bin/bash

env=devServer
sshAddress=ubuntu@dev.iagency.com.vn

if [[ $TRAVIS_TAG =~ -dev- ]]; then
  env=devServer
  sshAddress=ubuntu@dev.iagency.com.vn
fi

if [[ $TRAVIS_TAG =~ -sit- ]]; then
  env=sit
  sshAddress=ubuntu@sit.iagency.com.vn
fi

if [[ $TRAVIS_TAG =~ -uat- ]]; then
  env=uat
  sshAddress=ubuntu@uat.iagency.com.vn
fi

if [[ $TRAVIS_TAG =~ -prod- ]]; then
  env=prod
  sshAddress=ubuntu@iagency.com.vn
fi

echo "${env}"
echo "${sshAddress}"

ng build --no-progress --prod --env=$env
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist/ "${sshAddress}:/var/www/iagency-frontend/organization"
