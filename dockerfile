FROM node:21-alpine
RUN mkdir /three_app
COPY . ./three_app
WORKDIR /three_app
RUN npm i
EXPOSE 3000
CMD ["npm","run","dev"]