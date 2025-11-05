# Imagen base
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json primero para aprovechar cache de dependencias
COPY package*.json ./

# Instalar dependencias de producción
RUN npm ci --only=production

# Copiar el resto del proyecto
COPY . .

# Exponer puerto
EXPOSE 8080

# Comando de inicio
CMD ["node", "src/server.js"]
