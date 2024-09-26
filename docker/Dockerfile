FROM node:latest
WORKDIR ./dist

COPY ../package.json ./package.json
RUN npm install

COPY ../dist .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]