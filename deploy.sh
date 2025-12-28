#!/bin/bash

# Configuration
PROJECT_ID=$(gcloud config get-value project)
APP_NAME="financial-dashboard"
REGION="asia-east1" # You can change this to your preferred region

echo "Deploying $APP_NAME to Google Cloud Run..."

# 1. Build the image using Cloud Build
echo "Building Container Image..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$APP_NAME

# 2. Deploy to Cloud Run
echo "Deploying to Cloud Run..."
gcloud run deploy $APP_NAME \
  --image gcr.io/$PROJECT_ID/$APP_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000

echo "Deployment Complete! 🚀"
