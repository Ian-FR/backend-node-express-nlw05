import { host, http, port } from './http';
import "./websocket/client";

http.listen(port, () =>
  console.log('server is running on: http://' + host + ':' + port)
);
