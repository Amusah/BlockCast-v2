-- BlockCast Local Database Schema

-- Users table
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    balance REAL DEFAULT 1.0,
    total_bets INTEGER DEFAULT 0,
    total_winnings REAL DEFAULT 0,
    verification_count INTEGER DEFAULT 0,
    joined_at TEXT,
    level TEXT DEFAULT 'Novice Verifier'
);

-- Markets table
CREATE TABLE markets (
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

-- Bets table
CREATE TABLE bets (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    market_id TEXT,
    position TEXT,
    amount REAL,
    placed_at TEXT,
    status TEXT DEFAULT 'active',
    potential_return REAL
);

-- Verifications table
CREATE TABLE verifications (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    claim TEXT,
    result TEXT,
    created_at TEXT
);

-- User bets table (separate from general bets table for user-specific queries)
CREATE TABLE user_bets (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    market_id TEXT,
    position TEXT,
    amount REAL,
    placed_at TEXT,
    status TEXT DEFAULT 'active',
    potential_return REAL
);