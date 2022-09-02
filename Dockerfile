FROM node:16-alpine 
ENV WDR=/app
WORKDIR ${WDR}

# prepare environment
COPY package.json ${WDR}
COPY pnpm-lock.yaml ${WDR}
COPY . ${WDR}
RUN npm i -g pnpm

# build server 
RUN pnpm i
RUN pnpm run build:server
CMD ["pnpm", "run", "start:server"]
