FROM node:8.15.1-alpine

VOLUME [ "/d" ]
EXPOSE 80
WORKDIR  /usr/app
COPY . .

# before building image
RUN npm i
RUN npm i -g http-server
# RUN npm run test
RUN npm run build

#RUN npm run build

# execute on the runtime:

CMD http-server ./docs -p 80