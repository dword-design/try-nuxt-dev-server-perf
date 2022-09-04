export default {
  serverMiddleware: [
    { path: '/api/search', handler: '~/server-middleware/search.get.js' },
  ],
}
