FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV DOCKER=true
CMD ["npm", "run", "dev", "--", "--host"]
EXPOSE 3000
