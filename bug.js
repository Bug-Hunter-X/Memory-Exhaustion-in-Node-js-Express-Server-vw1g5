const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the file is larger than the available memory
  const largeBuffer = Buffer.alloc(1024 * 1024 * 1024); // 1GB buffer
  res.send(largeBuffer);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});