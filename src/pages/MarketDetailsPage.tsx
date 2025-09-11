import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MarketPage from '@/components/MarketPage';
import { toast } from 'sonner';
import { realTimeMarkets } from '@/components/BettingMarkets';

export default function MarketDetailsPage() {
  const { marketId } = useParams();
  const navigate = useNavigate();
  const [market, setMarket] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userBalance] = useState(1.0); // Mock user balance

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        setIsLoading(true);
        if (!marketId) {
          toast.error('Market ID is missing');
          navigate('/');
          return;
        }

        // Find the market in realTimeMarkets instead of database
        const foundMarket = realTimeMarkets.find(market => market.id === marketId);
        if (!foundMarket) {
          toast.error('Market not found');
          navigate('/');
          return;
        }

        setMarket(foundMarket);
      } catch (error) {
        console.error('Error fetching market:', error);
        toast.error('Failed to load market details');
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarket();
  }, [marketId, navigate]);

  const handlePlaceBet = async (marketId: string, position: 'yes' | 'no', amount: number) => {
    if (amount > userBalance) {
      toast.error('Insufficient balance');
      return;
    }

    // Simulate betting delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(`Truth position cast successfully on ${position.toUpperCase()}!`);
  };

  const handleBack = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h3>Loading Market Details...</h3>
          <p className="text-muted-foreground">
            Fetching truth market information
          </p>
        </div>
      </div>
    );
  }

  if (!market) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <h3>Market Not Found</h3>
          <p className="text-muted-foreground">
            The requested market could not be found.
          </p>
          <button 
            onClick={handleBack}
            className="text-primary hover:underline"
          >
            Back to Markets
          </button>
        </div>
      </div>
    );
  }

  return (
    <MarketPage 
      market={market}
      onPlaceBet={handlePlaceBet}
      userBalance={userBalance}
      onBack={handleBack}
    />
  );
}