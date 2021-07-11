const express = require('express');

const app = express();

const PORT = process.env.APPID;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Data Recieved', AppID: PORT });
});
app.get('/app1', (req, res) => {
  res.status(200).json({ message: 'Data Recieved - App1', AppID: PORT });
});
app.get('/app2', (req, res) => {
  res.status(200).json({ message: 'Data Recieved - App2', AppID: PORT });
});
app.get('/app3', (req, res) => {
  res.status(200).json({ message: 'Data Recieved - App3', AppID: PORT });
});
app.get('/admin', (req, res) => {
  res.status(200).json({ message: 'Data Recieved - admin', AppID: PORT });
});

app.listen(PORT, () => {
  `Application running on PORT ${PORT}`;
});
