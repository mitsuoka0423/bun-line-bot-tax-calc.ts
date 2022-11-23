FROM jarredsumner/bun:edge
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
COPY . .
RUN bun install
RUN ls -la
EXPOSE 3000
ENTRYPOINT ["bun", "start"]