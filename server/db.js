const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, 'ictus.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS casos (
    id TEXT PRIMARY KEY,
    folio TEXT,
    fecha TEXT,
    estado TEXT,
    puerta_tratamiento REAL,
    capturado_por TEXT,
    informe TEXT,
    data TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);

module.exports = db;
