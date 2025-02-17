FROM node:18-alpine AS base
WORKDIR /app

ENV NODE_ENV=production

COPY / ./

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["npm","run", "start:next"]