const app = require("express")();
const http = require("http").Server(app);

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => console.log(`app is running on port ${PORT}`));
