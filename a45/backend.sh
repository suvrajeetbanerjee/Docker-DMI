echo "Create a backend directory"
mkdir backend

echo "Create a simple HTML response file"
echo "<h1>Backend OK</h1>" > backend/index.html

echo "Create the backend Dockerfile"
cat > backend/Dockerfile << 'EOF'
FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
EOF

echo "Build the backend image"
sudo docker build -t backend-img ./backend


