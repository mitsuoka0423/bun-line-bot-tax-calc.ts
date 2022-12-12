FROM node:18
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
COPY . .
RUN curl -fsSL https://bun.sh/install | bash 
ENV PATH $PATH:/root/.bun/bin
RUN bun i
EXPOSE 3000
ENTRYPOINT ["bun", "start"]