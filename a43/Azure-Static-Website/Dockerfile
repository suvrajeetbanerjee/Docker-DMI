FROM nginx:alpine
# remove default nginx page
RUN rm -rf /usr/share/nginx/html/*
# copy repo contents to nginx web root
COPY . /usr/share/nginx/html
EXPOSE 80
# nginx default CMD is fine
