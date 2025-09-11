import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Loader2, Send, AlertTriangle, Paperclip } from 'lucide-react';
import { toast } from 'sonner';

interface VerificationInputProps {
  onSubmit: (claim: string) => void;
  isLoading: boolean;
}

export default function VerificationInput({ onSubmit, isLoading }: VerificationInputProps) {
  const [claim, setClaim] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (claim.trim() && !isLoading) {
      onSubmit(claim.trim());
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (100MB limit)
      if (file.size > 100000000) { // 100MB in bytes
        toast.error('File size must be less than 100MB.');
        return;
      }
      setSelectedFile(file);
    }
  };

  const exampleClaims = [
    "Coffee consumption reduces the risk of heart disease",
    "The Great Wall of China is visible from space",
    "Humans only use 10% of their brain capacity",
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Submit a Claim for Verification</CardTitle>
          <CardDescription>
            Enter any statement or claim you'd like to fact-check using our AI-powered verification system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Enter your claim here... (e.g., 'Drinking 8 glasses of water daily is necessary for health')"
              value={claim}
              onChange={(e) => setClaim(e.target.value)}
              className="min-h-[100px] resize-none"
              disabled={isLoading}
            />
            
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">
                  {claim.length}/500 characters
                </div>
              </div>
              
              {/* Media attachment button */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button {...({} as any)} variant="outline" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
              </label>
              
              <Button 
                type="submit" 
                disabled={!claim.trim() || isLoading || claim.length > 500}
                className="flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Verify Claim
                  </>
                )}
              </Button>
            </div>
            
            {selectedFile && (
              <div className="flex items-center gap-2 text-sm p-2 bg-muted rounded">
                <Paperclip className="h-4 w-4" />
                <span className="truncate flex-1">
                  {selectedFile.name} ({(selectedFile.size / 1000000).toFixed(2)} MB)
                </span>
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Example Claims */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Try These Examples</CardTitle>
          <CardDescription>
            Click on any example below to test the verification system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {exampleClaims.map((example, index) => (
              <div
                key={index}
                className="p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
                onClick={() => !isLoading && setClaim(example)}
              >
                <p className="text-sm">{example}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-lg">
        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="text-amber-800 dark:text-amber-200 mb-1">
            <strong>Disclaimer:</strong> This is an AI-powered fact-checking tool for informational purposes.
          </p>
          <p className="text-amber-700 dark:text-amber-300">
            Always verify important information through multiple reliable sources and consult experts when needed.
          </p>
        </div>
      </div>
    </div>
  );
}