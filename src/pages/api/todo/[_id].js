import createHandler from '@/middleware';
import Todo from '@/models/todo';
import { setRoutesById } from '@/lib/routes';

const app = createHandler();
setRoutesById(app, Todo);

export default app;
