# Imagem base única
FROM node:24-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante da aplicação
COPY . .

# Gerar build de produção
RUN npm run build

# Instalar o servidor estático
RUN npm install -g serve

# Expor a porta padrão do 'serve'
EXPOSE 3000

# Comando para servir o conteúdo do build
CMD ["serve", "-s", "build", "-l", "3000"]