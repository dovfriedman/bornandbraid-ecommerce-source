import { Router } from 'itty-router';

const router = Router();

router.get('/', () => {
  return new Response(`Hello, from ${ENV}`);
});

router.all('*', () => new Response('404, not found!', { status: 404 }));

addEventListener('fetch', e => {
  return e.respondWith(router.handle(e.request));
});
