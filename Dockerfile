FROM node:16.16.0 as build 
ARG REACT_APP_API_GRAPHQL
ARG REACT_APP_ACTIVE_SITE
RUN echo $REACT_APP_API_GRAPHQL
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . .
RUN REACT_APP_API_GRAPHQL=${REACT_APP_API_GRAPHQL} \ 
  REACT_APP_ACTIVE_SITE=${REACT_APP_ACTIVE_SITE} \ 
  npm run build:ci

FROM nginx:1.17-alpine 
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]