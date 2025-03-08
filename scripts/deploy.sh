#!/bin/bash
cd /home/ec2-user/nextjs-app

echo "Installing dependencies..."
npm install

echo "Building the app..."
npm run build

echo "Restarting the app with PM2..."
pm2 restart next-app || pm2 start npm --name "next-app" -- run start
pm2 save
