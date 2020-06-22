import app from "./app";

const PORT = 80;

const handleListening = () =>
  console.log(`✅Listening on: http://www.nshome.me:${PORT}`);

app.listen(PORT, handleListening);
