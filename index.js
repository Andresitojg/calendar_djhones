
import express from 'express'
import {pool} from './db.js'
const app= express ()
app.listen(3000)
console.log("server running on port 3000")
app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT 1 + 1 AS result')
});

app.get('/employees',(req, res) => res.send('getting employees'))
app.post('/employees',(req, res) => res.send('posting employees'))
app.delete('/employees',(req, res) => res.send('deleting employees'))
app.put('/employees',(req, res) => res.send('updating employees'))