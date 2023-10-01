const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
   const url = new URL(req.url);
   if(url.pathname === '/') return new Response("Home");
   if(url.pathname === '/user') return new Response("user");
   return new Response("404")
  },
});
console.log(`Listen on ${server.port}`); 