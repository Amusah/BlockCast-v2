import {
  Globe,
  Twitter,
  MessageCircle,
  Mail,
  Shield,
  FileText,
  Users,
  Zap,
  Search,
  Target,
  ChevronDown,
} from "lucide-react";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import FooterAccordion from './FooterAccordion';
import blockcastLogo from '@/assets/4714a7efb088ecf7991d3a7cb494d86ff45fc844.png';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const navigate = useNavigate();
  const [toggleSupport, setToggleSupport] = useState(false);

  const handleLinkClick = (page: string) => {
    // Map page names to actual routes
    const routeMap: Record<string, string> = {
      'markets': '/',
      'verify': '/verify-truth',
      'community': '/community-hub',
      'about': '/about',
      'contact': '/contact',
      'privacy': '/privacy',
      'terms': '/terms',
      'help': '/help'
    };

    const route = routeMap[page];
    if (route) {
      navigate(route);
    } else if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleToggleSupport = () => {
    setToggleSupport(!toggleSupport);
  };

  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-12 max-w-7xl lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section - Tagline Removed */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handleLogoClick}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
                aria-label="Go to Truth Markets"
              >
                <img
                  src={blockcastLogo}
                  alt="Blockcast Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold text-primary">Blockcast</h3>
                </div>
              </button>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Africa's first AI-powered truth verification platform. Combating
              misinformation through collective intelligence and
              blockchain-secured credibility across the continent.
            </p>
            <div className="flex items-center gap-2">
              <Button
                {...({} as any)}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                {...({} as any)}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button
                {...({} as any)}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Truth Platform Links */}
          <div className="space-y-4 md:block hidden">
            <h4 className="font-semibold text-foreground">Truth Platform</h4>
            <div className="space-y-2">
              {[
                { label: "Truth Markets", icon: Globe, page: "markets" },
                { label: "Fact Verification", icon: Shield, page: "verify" },
                { label: "Community Truth", icon: Users, page: "community" },
              ].map((item) => (
                <Button
                  {...({} as any)}
                  key={item.label}
                  variant="ghost"
                  onClick={() => handleLinkClick(item.page)}
                  className="w-full justify-start gap-2 h-auto p-2 text-muted-foreground hover:text-foreground"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/*************************** Truth Support *************************/}

          <div className="space-y-4 md:block hidden">
            <h4 className="font-semibold text-foreground">Support & Legal</h4>
            <div className="space-y-2">
              {[
                { label: "About Blockcast", page: "about" },
                { label: "Contact Us", page: "contact" },
                { label: "Privacy Policy", page: "privacy" },
                { label: "Terms of Service", page: "terms" },
                { label: "Help Center", page: "help" },
              ].map((item) => (
                <Button
                  {...({} as any)}
                  key={item.label}
                  variant="ghost"
                  onClick={() => handleLinkClick(item.page)}
                  className="w-full justify-start h-auto p-2 text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          {/* <FooterAccordion handleLinkClick={handleLinkClick} /> */}
          
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground text-center w-full">
            <p>
              &copy; {new Date().getFullYear()} Blockcast. Fighting
              misinformation through truth.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full hidden lg:flex">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                Truth Engine: Active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                AI Verification: Live
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}