FROM node:16-alpine 
ENV WDR=/app

WORKDIR ${WDR}

COPY package.json ${WDR}
COPY package-lock.json ${WDR}
COPY . ${WDR}

RUN npm i
RUN npm run build:server

CMD ["npm", "run", "start:server"]
