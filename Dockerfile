FROM node:14.18.1-bullseye-slim as build
WORKDIR /app
COPY front/package*.json .
RUN npm install 
COPY front .
RUN npm run build

FROM nginx:1.20.1 as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]