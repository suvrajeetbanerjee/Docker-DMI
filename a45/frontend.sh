echo "Create a frontend directory"
mkdir frontend

echo "Create the app.js file"
cat > frontend/app.js << 'EOF'
import http from 'http';

const backendURL = process.env.BACKEND_URL || 'http://backend';

http.get(backendURL, (res) => {
    console.log("Connected to backend");
    res.on('data', (chunk) => process.stdout.write(chunk));
}).on("error", (err) => {
    console.log("Error:", err.message);
});
EOF

echo "Create package.json"
cat > frontend/package.json << 'EOF'
{
  "name": "frontend-app",
  "version": "1.0.0",
  "type": "module"
}
EOF

echo "Create the frontend Dockerfile"
cat > frontend/Dockerfile << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY . .
CMD ["node", "app.js"]
EOF

echo "Build the frontend image"
sudo docker build -t frontend-img ./frontend
