FROM node:22 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build


FROM nginx:alpine

COPY --from=builder /app/dist/mult-tarefas/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# Estágio de construção (build)
# FROM build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Estágio de produção (nginx)
# FROM nginx:alpine
# COPY /app/dist/mult-tarefas/browser /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx/nginx.conf
# EXPOSE 80