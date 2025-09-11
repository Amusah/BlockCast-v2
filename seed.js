const Database = require('better-sqlite3');
const path = require('path');

// Initialize the database
const dbPath = path.join(__dirname, 'local_db.sqlite');
const db = new Database(dbPath);

// Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    balance REAL DEFAULT 1.0,
    total_bets INTEGER DEFAULT 0,
    total_winnings REAL DEFAULT 0,
    verification_count INTEGER DEFAULT 0,
    joined_at TEXT,
    level TEXT DEFAULT 'Novice Verifier'
  );

  CREATE TABLE IF NOT EXISTS markets (
    id TEXT PRIMARY KEY,
    claim TEXT,
    category TEXT,
    subcategory TEXT,
    source TEXT,
    description TEXT,
    total_pool REAL DEFAULT 0,
    yes_pool REAL DEFAULT 0,
    no_pool REAL DEFAULT 0,
    yes_odds REAL DEFAULT 1.0,
    no_odds REAL DEFAULT 1.0,
    total_casters INTEGER DEFAULT 0,
    expires_at TEXT,
    status TEXT DEFAULT 'active',
    trending INTEGER DEFAULT 0,
    country TEXT,
    region TEXT,
    market_type TEXT,
    confidence_level TEXT,
    image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS bets (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    market_id TEXT,
    position TEXT,
    amount REAL,
    placed_at TEXT,
    status TEXT DEFAULT 'active',
    potential_return REAL
  );

  CREATE TABLE IF NOT EXISTS verifications (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    claim TEXT,
    result TEXT,
    created_at TEXT
  );

  CREATE TABLE IF NOT EXISTS user_bets (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    market_id TEXT,
    position TEXT,
    amount REAL,
    placed_at TEXT,
    status TEXT DEFAULT 'active',
    potential_return REAL
  );
`);

// Default markets data
const defaultMarkets = [
  {
    id: 'nigeria-crypto-adoption-2025',
    claim: 'Will cryptocurrency adoption in Nigeria exceed 40% of adults by end of 2025?',
    category: 'Finance',
    subcategory: 'Cryptocurrency',
    source: 'Central Bank of Nigeria',
    description: 'Truth verification on Nigeria\'s digital currency adoption amid regulatory changes.',
    total_pool: 345000,
    yes_pool: 241500,
    no_pool: 103500,
    yes_odds: 1.43,
    no_odds: 3.33,
    total_casters: 2287,
    expires_at: new Date('2025-12-31').toISOString(),
    status: 'active',
    trending: 1,
    country: 'Nigeria',
    region: 'West Africa',
    market_type: 'future',
    confidence_level: 'high',
    image_url: 'https://images.unsplash.com/photo-1629193382974-f478714dba26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwY3J5cHRvY3VycmVuY3klMjBuaWdlcmlhfGVufDF8fHx8MTc1NTc4NzY4Mnww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'afcon-morocco-host-2025',
    claim: 'Will Morocco host the Africa Cup of Nations finals in 2025?',
    category: 'Sports',
    subcategory: 'Football Tournaments',
    source: 'Confederation of African Football',
    description: 'Sports truth verification on AFCON 2025 hosting arrangements.',
    total_pool: 275000,
    yes_pool: 192500,
    no_pool: 82500,
    yes_odds: 1.43,
    no_odds: 3.33,
    total_casters: 1987,
    expires_at: new Date('2025-06-30').toISOString(),
    status: 'active',
    trending: 1,
    country: 'Morocco',
    region: 'North Africa',
    market_type: 'future',
    confidence_level: 'high',
    image_url: 'https://images.unsplash.com/photo-1560805004-334414e8f2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwZm9vdGJhbGwlMjBzdGFkaXVtfGVufDF8fHx8MTc1NTc4NzcyMXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'starlink-africa-expansion-2025',
    claim: 'Will Starlink be available in over 30 African countries by end of 2025?',
    category: 'Technology',
    subcategory: 'Satellite Internet',
    source: 'SpaceX Communications',
    description: 'Tech truth verification on satellite internet expansion across Africa.',
    total_pool: 320000,
    yes_pool: 224000,
    no_pool: 96000,
    yes_odds: 1.43,
    no_odds: 3.33,
    total_casters: 2145,
    expires_at: new Date('2025-12-31').toISOString(),
    status: 'active',
    trending: 1,
    region: 'Continental Africa',
    market_type: 'future',
    confidence_level: 'high',
    image_url: 'https://images.unsplash.com/photo-1679068008949-12852e5fca5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBpbnRlcm5ldCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1Nzg3NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

// Insert default markets
const insertMarketStmt = db.prepare(`
  INSERT OR REPLACE INTO markets (
    id, claim, category, subcategory, source, description, total_pool, yes_pool, no_pool,
    yes_odds, no_odds, total_casters, expires_at, status, trending, country, region,
    market_type, confidence_level, image_url
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

// Begin transaction for better performance
const insertMarkets = db.transaction((markets) => {
  for (const market of markets) {
    insertMarketStmt.run(
      market.id, market.claim, market.category, market.subcategory, market.source, market.description,
      market.total_pool || 0, market.yes_pool || 0, market.no_pool || 0,
      market.yes_odds || 1.0, market.no_odds || 1.0, market.total_casters || 0,
      market.expires_at, market.status || 'active', market.trending ? 1 : 0,
      market.country, market.region, market.market_type, market.confidence_level, market.image_url
    );
  }
});

// Run the transaction
insertMarkets(defaultMarkets);

console.log('Database seeded successfully with default markets!');

// Close the database connection
db.close();