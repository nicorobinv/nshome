import app from "./app.js";

const PORT = 80;

const handleListening = () =>
  console.log(`✅Listening on: http://www.nshome.me:${PORT}`);

const server = app.listen(PORT, handleListening);
