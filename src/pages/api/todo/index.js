import createHandler from '@/middleware';
import Todo from '@/models/todo';
import { setRoutes } from '@/lib/routes';

const app = createHandler();
setRoutes(app, Todo);

export default app;
