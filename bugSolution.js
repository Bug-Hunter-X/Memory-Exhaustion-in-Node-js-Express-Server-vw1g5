const express = require('express');
const fs = require('fs');
const app = express();
const largeFilePath = 'largeFile.txt'; // Create a large file for testing

// Create a 1GB file (optional, only needed for testing)
fs.writeFileSync(largeFilePath, Buffer.alloc(1024 * 1024 * 1024));

app.get('/', (req, res) => {
  const stream = fs.createReadStream(largeFilePath);
  stream.pipe(res);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});