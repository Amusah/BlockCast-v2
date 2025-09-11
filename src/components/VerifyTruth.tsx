import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Input } from './ui/input';
import VerificationInput from './VerificationInput';
import VerificationResults, { VerificationResult } from './VerificationResults';
import { toast } from 'sonner';
import { Shield, Zap, Globe, Users, CheckCircle, XCircle } from 'lucide-react';

export default function VerifyTruth() {
  const [claim, setClaim] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [loadingMessage, setLoadingMessage] = useState('');

  const handleVerify = async (claimText: string) => {
    if (!claimText || claimText.trim().length < 10) {
      toast.error('Please enter a claim of at least 10 characters');
      return;
    }

    setIsVerifying(true);
    setVerificationResult(null);
    
    const loadingMessages = [
      'Analyzing claim credibility...',
      'Cross-referencing African news sources...',
      'Consulting fact-checking databases...',
      'Evaluating evidence patterns...',
      'Generating verification report...'
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setLoadingMessage(loadingMessages[messageIndex % loadingMessages.length]);
      messageIndex++;
    }, 800);

    try {
      // Simulate verification process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const newVerification: VerificationResult = {
        id: `verification_${Date.now()}`,
        claim: claimText,
        verdict: Math.random() > 0.5 ? 'true' : 'false',
        confidence: Math.floor(Math.random() * 40 + 60), // 60-100%
        aiAnalysis: 'This verification uses AI-powered fact-checking combined with community consensus to determine truth. Multiple credible African news sources were analyzed to reach this conclusion.',
        sources: [
          { title: 'African Union News Network', url: 'https://au-news.org', credibility: 96 },
          { title: 'Reuters Africa', url: 'https://reuters.com/africa', credibility: 94 },
          { title: 'BBC Africa', url: 'https://bbc.com/africa', credibility: 92 },
          { title: 'Al Jazeera Africa', url: 'https://aljazeera.com/africa', credibility: 90 }
        ],
        blockchainHash: `0x${Math.random().toString(16).substr(2, 64)}`,
        timestamp: new Date(),
        verificationTime: Math.floor(Math.random() * 3000) + 1000
      };
      
      setVerificationResult(newVerification);
      toast.success('Truth verification completed!');
      
    } catch (error) {
      toast.error('Verification failed. Please try again.');
    } finally {
      clearInterval(messageInterval);
      setIsVerifying(false);
      setLoadingMessage('');
    }
  };

  const handleNewVerification = () => {
    setVerificationResult(null);
    setClaim('');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary mb-1 flex items-center gap-2">
            <Shield className="h-7 w-7" />
            Verify Truth
          </h1>
          <p className="text-sm text-muted-foreground">
            Submit claims for AI-powered verification with community consensus
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Submit a Claim for Verification
              </CardTitle>
              <CardDescription>
                Enter a statement you'd like to verify for truth. Our AI will analyze it with community input.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="claim">Claim to Verify</Label>
                  <Textarea
                    id="claim"
                    placeholder="Enter the statement you want to verify for truth..."
                    value={claim}
                    onChange={(e) => setClaim(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button 
                  onClick={() => handleVerify(claim)}
                  disabled={isVerifying || !claim.trim()}
                  className="w-full"
                >
                  {isVerifying ? 'Verifying...' : 'Verify Truth'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {verificationResult && (
            <VerificationResults 
              result={verificationResult}
              onNewVerification={handleNewVerification}
            />
          )}
        </div>

        <div className="space-y-6">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Submit Claim</h4>
                    <p className="text-sm text-muted-foreground">
                      Enter any statement you want verified for truth
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">AI Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Our AI cross-references multiple African news sources
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Community Input</h4>
                    <p className="text-sm text-muted-foreground">
                      Community members vote to validate or challenge findings
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Blockchain Record</h4>
                    <p className="text-sm text-muted-foreground">
                      Results are permanently recorded on the blockchain
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Community Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-center">
                  <div className="text-xl font-bold text-primary">24.8K</div>
                  <div className="text-xs text-muted-foreground">Verifications</div>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg text-center">
                  <div className="text-xl font-bold text-secondary">92.4%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div className="p-3 bg-green-500/10 rounded-lg text-center">
                  <div className="text-xl font-bold text-green-500">8.7K</div>
                  <div className="text-xs text-muted-foreground">Contributors</div>
                </div>
                <div className="p-3 bg-yellow-500/10 rounded-lg text-center">
                  <div className="text-xl font-bold text-yellow-500">1.2M</div>
                  <div className="text-xs text-muted-foreground">Claims</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}