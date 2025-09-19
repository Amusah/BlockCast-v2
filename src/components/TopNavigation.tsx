import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Menu,
  Shield,
  Settings,
  Moon,
  Sun,
  TrendingUp,
  Wallet,
  Bell,
  Users,
  Languages,
  ChevronDown,
  Search,
  HandCoins,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useLanguage } from "./LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";
import blockcastLogo from "@/assets/4714a7efb088ecf7991d3a7cb494d86ff45fc844.png";
// import FooterAccordion from './FooterAccordion';
import NavAccordion from "./NavAccordion";
import LocalCurrencyWallet from "./LocalCurrencyWallet";

interface TopNavigationProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  userBalance: number;
}

export default function TopNavigation({
  isDarkMode,
  onToggleDarkMode,
  userBalance,
}: TopNavigationProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Simplified main navigation - only core features
  const mainNavItems = [
    { id: "markets", label: "Truth Markets", icon: TrendingUp, path: "/" },
    {
      id: "verify",
      label: "Verify Truth",
      icon: Shield,
      path: "/verify-truth",
    },
    {
      id: "community-hub",
      label: "community Hub",
      icon: Users,
      path: "/community-hub",
    },
  ];

  const languageOptions = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "sw", name: "Kiswahili", flag: "🇰🇪" },
  ];

  const handleNavClick = (path: string = '') => {
    navigate(path);
    setShowMobileMenu(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4 max-w-7xl mx-auto lg:px-8">
          {/* Left: Logo and Brand */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogoClick}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none"
                aria-label="Go to Truth Markets"
              >
                <img
                  src={blockcastLogo}
                  alt="Blockcast Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <div>
                  <h1 className="text-lg font-bold">Blockcast</h1>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links - Simplified */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <Button
                    key={item.id}
                    variant={active ? "default" : "ghost"}
                    onClick={() => handleNavClick(item.path)}
                    className={`gap-2 px-4 py-2 h-10 ${
                      active
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                );
              })}
            </nav>
          </div>

          {/* Right: User Actions - Simplified */}
          <div className="flex items-center gap-3">
            {/* Language Selector - Compact */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 px-2 py-1">
                  <Languages className="h-4 w-4" />
                  <span className="hidden lg:inline text-xs">
                    {languageOptions.find((l) => l.code === language)?.flag}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={language === lang.code ? "bg-primary/10" : ""}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Balance (Desktop) - Compact */}
            <div className="hidden lg:flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-md">
              <Wallet className="h-3 w-3 text-primary" />
              <span className="text-xs font-semibold text-foreground">
                {userBalance.toFixed(3)}
              </span>
            </div>

            {/* Notifications - Compact */}
            <Button variant="ghost" size="sm" className="relative p-2">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>

            {/* Theme Toggle - Compact */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleDarkMode}
              className="p-2"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* User Menu (Desktop) - Simplified */}
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2 px-2 py-1">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">
                        Truth Verifier
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleNavClick("/settings")}>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={() => setIsVisible(true)}>
                    <Wallet className="h-4 w-4 mr-2" />
                    Fund Wallet
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader className="pb-6">
                    <SheetTitle className="flex items-center gap-2">
                      <button
                        onClick={handleLogoClick}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none"
                      >
                        <img
                          src={blockcastLogo}
                          alt="Blockcast Logo"
                          className="w-6 h-6 rounded"
                        />
                        Blockcast
                      </button>
                    </SheetTitle>
                  </SheetHeader>

                  {/* User Profile Section */}
                  <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg mb-6">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">
                        Truth Verifier
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleNavClick("/settings")}
                      className="p-2 h-8 w-8 cursor-pointer"
                      aria-label="Settings"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Balance */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg mb-6">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-primary" />
                      <span className="font-medium">Balance</span>
                    </div>
                    <span className="font-bold text-primary">
                      {userBalance.toFixed(3)} ETH
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      setIsVisible(true);
                      handleNavClick();
                    }}
                    className="flex items-center gap-2 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg mb-6 cursor-pointer"
                  >
                    <HandCoins className="size-6 text-primary" />
                    <span className="font-medium">Fund Wallet</span>
                  </div>

                  {/* Support & Legal Links */}
                  {/* <FooterAccordion handleLinkClick={(page) => {
                    handleNavClick(`/${page}`);
                  }} /> */}
                  <NavAccordion
                    handleLinkClick={(page) => {
                      handleNavClick(`/${page}`);
                    }}
                  />

                  {/* Language Selector Mobile */}
                  <div className="mt-6">
                    <Select
                      value={language}
                      onValueChange={(value) => setLanguage(value as any)}
                    >
                      <SelectTrigger>
                        <Languages className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languageOptions.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            <span className="mr-2">{lang.flag}</span>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sign Out */}
                  <Button
                    variant="outline"
                    className="w-full mt-8 text-destructive border-destructive/30 hover:bg-destructive hover:text-destructive-foreground"
                  >
                    Sign Out
                  </Button>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Only Core Features */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-t border-border/40">
        <div
          className="flex flex-row justify-between items-center p-2 w-full"
          style={{ height: "70px" }}
        >
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.path)}
                className={`flex flex-col items-center justify-center gap-1 h-16 px-2 ${
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                }`}
                style={{
                  flex: "1",
                  minWidth: "70px",
                  minHeight: "60px",
                  padding: "12px 5px",
                  margin: "0 2px",
                }}
              >
                <Icon className="h-6 w-6" />
                <span
                  className="text-xs font-medium truncate"
                  style={{ fontSize: "12px" }}
                >
                  {item.label.split(" ")[0]}
                </span>
                {/* {active && (
                  <div className="w-6 h-1 bg-primary rounded-full" />
                )} */}
              </Button>
            );
          })}
          <Button
            variant="ghost"
            onClick={() => {
              // If we're already on the home page, focus the search input
              if (location.pathname === "/") {
                // Scroll to top to ensure the search input is visible
                window.scrollTo({ top: 0, behavior: "smooth" });

                // Focus the search input after a short delay to allow for scrolling
                setTimeout(() => {
                  const searchInput = document.getElementById(
                    "markets-search-input"
                  );
                  if (searchInput) {
                    searchInput.focus();
                  }
                }, 300);
              } else {
                // Navigate to the home page
                navigate("/");
              }
            }}
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground"
            style={{
              flex: "1",
              minWidth: "70px",
              minHeight: "60px",
              padding: "12px 5px",
              margin: "0 2px",
            }}
          >
            <Search className="h-6 w-6" />
            <span
              className="text-xs font-medium truncate"
              style={{ fontSize: "12px" }}
            >
              Search
            </span>
          </Button>
        </div>
      </div>
      {isVisible && (
        <LocalCurrencyWallet
          visible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      )}
    </>
  );
}
