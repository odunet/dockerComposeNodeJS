FROM node:14

#create app directory
WORKDIR /home/node/app

# Bundle app source
COPY app /home/node/app

# Install dependencies
RUN npm install

CMD npm run app