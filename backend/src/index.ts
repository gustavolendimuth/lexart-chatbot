import 'dotenv/config';
import app from './app';

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, async () => {
  console.log(`\n -> Listening on port ${PORT}...\n`);
});

export default server;
