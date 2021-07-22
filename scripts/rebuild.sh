#!/bin/bash

git pull origin main

yarn install --production

yarn generate

exit 0
