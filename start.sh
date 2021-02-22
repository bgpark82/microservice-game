#!/bin/bash

echo 'gradle build'
sh gradlew clean build

echo 'docker-compose up'
docker-compose down && docker-compose up --build