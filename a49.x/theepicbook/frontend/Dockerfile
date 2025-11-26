
###########################
# Static Frontend Runtime #
###########################
FROM nginx:alpine

# Nginx default webroot: /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Copy static assets from the repo into Nginx webroot.
# If you have a dedicated frontend build later, adjust to copy the build folder instead.
COPY public/ ./

# Optional: custom nginx.conf can be added later in Phase 4
# to tweak caching, gzip, etc.

