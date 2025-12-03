import express from 'express';
import cors from 'cors';
import { config } from './config.ts';

import mysql from 'mysql2/promise';

const app = express();

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.pass,
  database: config.db.name
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/policies', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM policies');
  res.send({
    'status': 'success',
    'data': rows
  });
});

app.get('/statistics', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM statistics');
  res.send({
    'status': 'success',
    'data': rows
  });
});

app.get('/features', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM features');
  res.send({
    'status': 'success',
    'data': rows
  });
});

app.get('/stories', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM stories');
  res.send({
    'status': 'success',
    'data': rows
  });
});

app.get('/schools', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM schools');
  res.send({
    'status': 'success',
    'data': rows
  });
});

app.get('/testimonials', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM testimonials');
  res.send({
    'status': 'success',
    'data': rows
  });
});


app.post('/apply', async (req, res) => {
  try {
    const {
      role,
      name,
      surname,
      email,
      whatsapp,
      country,
      schoolName,
      graduationYear
    } = req.body;

    // Kiểm tra thiếu dữ liệu
    if (!role || !name || !surname || !email || !whatsapp || !country || !schoolName || !graduationYear) {
      return res.status(400).json({
        status: 'error',
        message: 'Missing required fields'
      });
    }

    // Insert DB
    const sql = `
      INSERT INTO applications 
      (role, name, surname, email, whatsapp, country, school_name, graduation_year)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.query(sql, [
      role,
      name,
      surname,
      email,
      whatsapp,
      country,
      schoolName,
      graduationYear
    ]);

    return res.status(200).json({
      status: "success",
      message: "Application submitted successfully"
    });

  } catch (error: any) {
    console.error("Error:", error);

    return res.status(500).json({
      status: "error",
      message: "Server error",
      error: error.message
    });
  }
});

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});