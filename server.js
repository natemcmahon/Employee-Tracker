// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Guardiola8',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

module.exports = db ;