FROM node:18-alpine AS base
WORKDIR /app

ENV NODE_ENV=production

COPY . .
RUN npm ci

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["npm","run", "start:next"]



# FROM node:18-alpine AS base

# WORKDIR /app

# COPY package*.json ./

# #====================
# # BUILD
# #====================
# FROM base AS build

# RUN npm ci

# COPY . .

# RUN npm run build && npm prune --production

# #====================
# # RELEASE
# #====================
# FROM base AS release

# ENV NODE_ENV=development

# COPY --from=build /usr/src/app/node_modules ./node_modules
# COPY --from=build /usr/src/app/config ./config
# COPY --from=build /usr/src/app/dist ./dist

# EXPOSE 3000

# ENV PORT=3000

# # server.js is created by next build from the standalone output
# # https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
# ENV HOSTNAME="0.0.0.0"
# CMD ["npm","run", "start:next"]