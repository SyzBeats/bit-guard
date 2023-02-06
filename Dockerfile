FROM node:16-alpine 
ENV WDR=/app
WORKDIR ${WDR}

# prepare environment
COPY package.json ${WDR}
COPY package-lock.json ${WDR}
COPY . ${WDR}

# build server 
RUN npm ci
RUN npm run build:server
CMD ["npm", "run", "start:server"]
