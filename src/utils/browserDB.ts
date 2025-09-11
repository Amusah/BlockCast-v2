// Browser-compatible database implementation
// This is a mock implementation that simulates database operations in the browser

// Mock data structure
let mockUsers: any[] = [];
let mockMarkets: any[] = [];
let mockBets: any[] = [];
let mockVerifications: any[] = [];

// Initialize with default data
const initializeData = () => {
  // Check if we already have data in localStorage
  const storedUsers = localStorage.getItem('blockcast_users');
  const storedMarkets = localStorage.getItem('blockcast_markets');
  const storedBets = localStorage.getItem('blockcast_bets');
  const storedVerifications = localStorage.getItem('blockcast_verifications');
  
  if (storedUsers) {
    mockUsers = JSON.parse(storedUsers);
  } else {
    // Default user
    mockUsers = [{
      id: 'user_1',
      balance: 1.0,
      total_bets: 0,
      total_winnings: 0,
      verification_count: 0,
      joined_at: new Date().toISOString(),
      level: 'Novice Verifier'
    }];
    localStorage.setItem('blockcast_users', JSON.stringify(mockUsers));
  }
  
  if (storedMarkets) {
    mockMarkets = JSON.parse(storedMarkets);
  } else {
    // Default markets
    mockMarkets = [
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
    localStorage.setItem('blockcast_markets', JSON.stringify(mockMarkets));
  }
  
  if (storedBets) {
    mockBets = JSON.parse(storedBets);
  }
  
  if (storedVerifications) {
    mockVerifications = JSON.parse(storedVerifications);
  }
};

// Initialize data on load
initializeData();

// Helper functions to update localStorage
const updateLocalStorage = () => {
  localStorage.setItem('blockcast_users', JSON.stringify(mockUsers));
  localStorage.setItem('blockcast_markets', JSON.stringify(mockMarkets));
  localStorage.setItem('blockcast_bets', JSON.stringify(mockBets));
  localStorage.setItem('blockcast_verifications', JSON.stringify(mockVerifications));
};

// User functions
export const getUser = (userId: string) => {
  return mockUsers.find(user => user.id === userId) || null;
};

export const createUser = (userId: string) => {
  const newUser = {
    id: userId,
    balance: 1.0,
    total_bets: 0,
    total_winnings: 0,
    verification_count: 0,
    joined_at: new Date().toISOString(),
    level: 'Novice Verifier'
  };
  mockUsers.push(newUser);
  updateLocalStorage();
  return newUser;
};

export const updateUser = (userId: string, updates: any) => {
  const userIndex = mockUsers.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates };
    updateLocalStorage();
    return mockUsers[userIndex];
  }
  return null;
};

// Market functions
export const getAllMarkets = () => {
  return mockMarkets;
};

export const getMarketById = (marketId: string) => {
  return mockMarkets.find(market => market.id === marketId) || null;
};

export const createMarket = (market: any) => {
  mockMarkets.push(market);
  updateLocalStorage();
  return market;
};

export const updateMarket = (marketId: string, updates: any) => {
  const marketIndex = mockMarkets.findIndex(market => market.id === marketId);
  if (marketIndex !== -1) {
    mockMarkets[marketIndex] = { ...mockMarkets[marketIndex], ...updates };
    updateLocalStorage();
    return mockMarkets[marketIndex];
  }
  return null;
};

// Bet functions
export const getUserBets = (userId: string) => {
  return mockBets.filter(bet => bet.user_id === userId).sort((a, b) => 
    new Date(b.placed_at).getTime() - new Date(a.placed_at).getTime()
  );
};

export const createBet = (bet: any) => {
  mockBets.push(bet);
  updateLocalStorage();
  return bet;
};

// Verification functions
export const createVerification = (verification: any) => {
  mockVerifications.push(verification);
  updateLocalStorage();
  return verification;
};

export const getUserVerifications = (userId: string) => {
  return mockVerifications.filter(verification => verification.user_id === userId).sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
};

// Export initialize function for testing
export const initializeDatabase = () => {
  initializeData();
};

export default {
  getUser,
  createUser,
  updateUser,
  getAllMarkets,
  getMarketById,
  createMarket,
  updateMarket,
  getUserBets,
  createBet,
  createVerification,
  getUserVerifications,
  initializeDatabase
};