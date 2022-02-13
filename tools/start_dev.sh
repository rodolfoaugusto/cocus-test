#!/bin/sh

clear
# sudo chown $USER -R *
# Start Docker
sudo service docker start

# Run container
sudo docker-compose down
sudo docker-compose up -d --build

# Set development enviroment && Database Migrations
cd ..
cp env.example .env
yarn prisma migrate dev

# Database Seed
# yarn prisma db seed

# Run application (DEV MODE)
yarn dev