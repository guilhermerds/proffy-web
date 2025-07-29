# Etapa 1: build
FROM node:24-alpine AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Executa o build
RUN npm run build

# Etapa 2: produção
FROM node:24-alpine

WORKDIR /app

# Copia apenas os arquivos necessários da etapa de build
COPY --from=builder /app .

# Expõe a porta da aplicação (ajuste se necessário)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
