// Database connection utility
// This file supports both MySQL and PostgreSQL
// Uncomment the one you want to use

// ===== MYSQL SETUP =====
// import mysql from 'mysql2/promise';

// let pool: mysql.Pool | null = null;

// export async function getDbConnection() {
//   if (!pool) {
//     pool = mysql.createPool({
//       host: process.env.DB_HOST || 'localhost',
//       user: process.env.DB_USER || 'root',
//       password: process.env.DB_PASSWORD || '',
//       database: process.env.DB_NAME || 'uniprep',
//       waitForConnections: true,
//       connectionLimit: 10,
//       queueLimit: 0,
//     });
//   }
//   return pool;
// }

// ===== POSTGRESQL SETUP (Alternative) =====
// Uncomment this if you want to use PostgreSQL instead of MySQL

import { Pool } from 'pg';

let pool: Pool | null = null;

export async function getDbConnection() {
  if (!pool) {
    pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'uniprep',
      port: parseInt(process.env.DB_PORT || '5432'),
      max: 10,
    });
  }
  return pool;
}

