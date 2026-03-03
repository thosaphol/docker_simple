const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 3000;
let conn = null

const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'db', // หรือใส่เป็น localhost ก็ได้
    user: 'root',
    password: 'root',
    database: 'tutorial'
  })
}

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/users', async (req, res) => {
  const [results] = await conn.query('SELECT * FROM users')
  res.json(results)
})

app.listen(PORT, async () => {
    await initMySQL();
    console.log(`Server running on http://localhost:${PORT}`);
});