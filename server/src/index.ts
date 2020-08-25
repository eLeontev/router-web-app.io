import { app } from './main';

const port = new Set(process.argv).has('development') ? 3001 : 3000;

app.listen(port, () => console.log('server is started on port:', port));
