import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Download, User, LogIn, Sun, Moon, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import collegeLogo from '@/assets/college-logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);

    // Check for authenticated user
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleAuthClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Call for Papers', href: '#call-for-papers' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Committee', href: '#committee' },
    { label: 'Registration', href: '#registration' },
    { label: 'Guidelines', href: '#guidelines' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src={collegeLogo}
              alt="College Logo"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-full"
            />
            <div className="hidden md:block">
              <h1 className={`text-lg lg:text-xl font-bold ${isScrolled ? 'text-primary' : 'text-yellow-400'}`}>NCEAMBT 2025</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary' : 'bg-yellow-400'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'border-border hover:bg-accent text-foreground'
                  : 'border-white bg-white/90 text-black hover:bg-white hover:text-black'
              }`}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`space-x-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'border-border hover:bg-accent text-foreground'
                  : 'border-white bg-white/90 text-black hover:bg-white hover:text-black'
              }`}
            >
              <Download size={16} />
              <span>Brochure</span>
            </Button>
            {user ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className={`space-x-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'border-border hover:bg-accent text-foreground'
                      : 'border-white bg-white/90 text-black hover:bg-white hover:text-black'
                  }`}
                  onClick={handleAuthClick}
                >
                  <User size={16} />
                  <span>Dashboard</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={`space-x-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'border-border hover:bg-accent text-foreground'
                      : 'border-white bg-white/90 text-black hover:bg-white hover:text-black'
                  }`}
                  onClick={handleSignOut}
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className={`space-x-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'border-border hover:bg-accent text-foreground'
                      : 'border-white bg-white/90 text-black hover:bg-white hover:text-black'
                  }`}
                  onClick={handleAuthClick}
                >
                  <LogIn size={16} />
                  <span>Login</span>
                </Button>
                <Button
                  size="sm"
                  className={`space-x-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                    isScrolled
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                      : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold'
                  }`}
                  onClick={handleAuthClick}
                >
                  <User size={16} />
                  <span>Signup</span>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:bg-accent'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <img
                    src={collegeLogo}
                    alt="College Logo"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-yellow-400">NCEAMBT 2025</h2>
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={toggleTheme}
                    className="space-x-2 justify-start"
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                  </Button>
                  <Button variant="outline" className="space-x-2 justify-start">
                    <Download size={16} />
                    <span>Download Brochure</span>
                  </Button>
                  {user ? (
                    <>
                      <Button variant="outline" className="space-x-2 justify-start" onClick={handleAuthClick}>
                        <User size={16} />
                        <span>Dashboard</span>
                      </Button>
                      <Button variant="outline" className="space-x-2 justify-start" onClick={handleSignOut}>
                        <LogOut size={16} />
                        <span>Logout</span>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="space-x-2 justify-start" onClick={handleAuthClick}>
                        <LogIn size={16} />
                        <span>Login</span>
                      </Button>
                      <Button variant="default" className="space-x-2 justify-start" onClick={handleAuthClick}>
                        <User size={16} />
                        <span>Sign Up</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;