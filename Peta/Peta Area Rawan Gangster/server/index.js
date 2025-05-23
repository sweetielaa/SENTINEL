// Build Server
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Gunakan middleware cors
app.use(cors());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Data area rawan kecelakaan, kejadian kecelakaan tahun 2022, 2023, dan 2024
app.get('/api/user', async (req, res) => {
    try {
        const client = await pool.connect();

        // Query untuk area Kota Semarang
        const queryArea = 'SELECT * FROM public."area_Semarang"';
        const resultArea = await client.query(queryArea);
        const areaSemarang = resultArea.rows;

        // Query untuk area rawan kecelakaan
        const queryRawan = 'SELECT * FROM public."area_rawan_kecelakaan"';
        const resultRawan = await client.query(queryRawan);
        const areaRawan = resultRawan.rows;

        // Query untuk kejadian tahun 2024
        const queryKejadian2024 = 'SELECT * FROM public."kejadian_2024"';
        const resultKejadian2024 = await client.query(queryKejadian2024);
        const kejadian2024 = resultKejadian2024.rows;
        
        // Query untuk kejadian tahun 2023
        const queryKejadian2023 = 'SELECT * FROM public."kejadian_2023"';
        const resultKejadian2023 = await client.query(queryKejadian2023);
        const kejadian2023 = resultKejadian2023.rows;

        // Query untuk kejadian tahun 2022
        const queryKejadian2022 = 'SELECT * FROM public."kejadian_2022"';
        const resultKejadian2022 = await client.query(queryKejadian2022);
        const kejadian2022 = resultKejadian2022.rows;       
        

        client.release();

        res.json({ areaSemarang, areaRawan, kejadian2024, kejadian2023, kejadian2022});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
