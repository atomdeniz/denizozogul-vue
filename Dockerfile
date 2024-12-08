# Base image olarak ARM64 uyumlu bir Node.js image kullanıyoruz
FROM node:18-alpine AS build-stage

# Çalışma dizini oluştur ve seç
WORKDIR /app

# Paket dosyalarını kopyala ve bağımlılıkları yükle
COPY package*.json ./
RUN npm install

# Uygulama dosyalarını kopyala ve üretim için derle
COPY . .
RUN npm run build

# Prod-stage için ARM64 uyumlu bir Nginx image kullanıyoruz
FROM arm64v8/nginx:stable-alpine AS production-stage

# Vue.js uygulamasını Nginx'e kopyala
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Nginx için gerekli izinler ve port açma işlemleri
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
