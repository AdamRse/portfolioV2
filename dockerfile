FROM node:16-alpine

WORKDIR /app

# Copier les fichiers de configuration des dépendances
COPY package*.json ./

# Installer les dépendances et créer le cache avec les bonnes permissions
RUN npm install && \
    mkdir -p /app/node_modules/.cache && \
    chmod -R 777 /app/node_modules/.cache

# Copier le reste du code source
COPY . .

# Exposer le port utilisé par React
EXPOSE 3000

# Commande pour démarrer l'application en mode développement
CMD ["npm", "start"]