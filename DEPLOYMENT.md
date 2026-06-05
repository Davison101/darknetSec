# Build and push to Vercel
npm run build
vercel --prod

# Or build Docker image
docker build -t repairpro:latest .
docker run -p 3000:3000 repairpro:latest
