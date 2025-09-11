import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Search, MessageCircle, Mail, BookOpen, Users, Shield, Zap, Globe, HelpCircle, FileText, Download, Video } from 'lucide-react';

export default function HelpCenterPage() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Click the "Sign Up" button in the top right corner and follow the registration process. You\'ll need to provide your email, create a password, and verify your account.'
        },
        {
          question: 'What is Blockcast and how does it work?',
          answer: 'Blockcast is Africa\'s first AI-powered truth verification platform that combines community wisdom with advanced artificial intelligence to combat misinformation. Our AI analyzes claims against multiple sources while the community votes on truthfulness.'
        },
        {
          question: 'Which countries does Blockcast support?',
          answer: 'We currently operate in 15+ African countries with plans to expand across the entire continent. Our platform supports multiple languages including English, French, and Swahili.'
        }
      ]
    },
    {
      title: 'Truth Verification',
      icon: Shield,
      questions: [
        {
          question: 'How does truth verification work?',
          answer: 'Our AI scans thousands of sources across Africa and internationally to verify claims. Community members then vote on the truthfulness of claims, providing local context and cultural nuances that improve AI accuracy.'
        },
        {
          question: 'How do I submit a claim for verification?',
          answer: 'Navigate to the "Verify" section and use the verification tool to submit suspicious claims. Our AI and community will assess and provide truth ratings.'
        },
        {
          question: 'How accurate is the AI verification?',
          answer: 'Our AI has a 94.2% accuracy rate, but we always recommend considering AI verifications alongside human judgment and additional sources.'
        }
      ]
    },
    {
      title: 'Truth Markets',
      icon: Zap,
      questions: [
        {
          question: 'What are truth markets?',
          answer: 'Truth markets are prediction markets for African events where you can cast positions on real-world outcomes. They help determine the likelihood of claims being true or false.'
        },
        {
          question: 'How do I participate in truth markets?',
          answer: 'Browse active markets in the "Truth Markets" section, select a market, and cast your position with a stake. You earn rewards for accurate predictions.'
        },
        {
          question: 'What are the risks of participating in truth markets?',
          answer: 'Truth markets involve financial risk. You may lose the funds you stake. Only participate with amounts you can afford to lose. Blockcast is not a financial advisor.'
        }
      ]
    },
    {
      title: 'Community & Reputation',
      icon: Users,
      questions: [
        {
          question: 'How do I become a trusted verifier?',
          answer: 'Consistently provide accurate truth assessments, participate in community discussions, and maintain high credibility scores. Trusted verifiers earn additional rewards and influence.'
        },
        {
          question: 'What is the credibility scoring system?',
          answer: 'Our blockchain-secured credibility system tracks your verification accuracy over time. Higher scores unlock additional features and rewards.'
        },
        {
          question: 'How do community discussions work?',
          answer: 'Each truth market has a dedicated discussion section where community members can share insights, debate claims, and collaborate on verification efforts.'
        }
      ]
    }
  ];

  const helpResources = [
    {
      title: 'User Guide',
      description: 'Comprehensive guide to using all Blockcast features',
      icon: FileText,
      action: 'Download PDF'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for key features',
      icon: Video,
      action: 'Watch Now'
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers and integrators',
      icon: Globe,
      action: 'View Docs'
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-primary">Help Center</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions and learn how to make the most of Blockcast
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </div>

      {/* Quick Help Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Button className="w-full gap-2">
              <Mail className="h-4 w-4" />
              Email Support
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary" />
              Community Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get help from our community of truth verifiers and experts.
            </p>
            <Button className="w-full gap-2" variant="outline">
              <MessageCircle className="h-4 w-4" />
              Join Discord
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-green-500" />
              Quick Start
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              New to Blockcast? Get started with our quick start guide.
            </p>
            <Button className="w-full gap-2" variant="outline">
              <BookOpen className="h-4 w-4" />
              View Guide
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Help Resources */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Help Resources
          </CardTitle>
          <CardDescription>
            Download guides and tutorials to help you master Blockcast
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {helpResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                    <Button className="p-0 mt-2 h-auto" variant="link">
                      {resource.action}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Categories */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-2">
            Browse questions by category or search above
          </p>
        </div>

        {faqCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <Card key={categoryIndex} className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="space-y-2">
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Still Need Help */}
      <Card className="border-border/50 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
        <CardContent className="py-8 text-center">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Still Need Help?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Our support team is available 24/7 to assist you with any questions or issues you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              Email Support
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Live Chat
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}