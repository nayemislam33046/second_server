const app = require("./App");
require("dotenv").config()
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
}); 