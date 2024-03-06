import config from './config/app'
import app from "./app";
app.listen(config.app.port, () => {
  console.log("Express server listening on port " + config.app.port);
});