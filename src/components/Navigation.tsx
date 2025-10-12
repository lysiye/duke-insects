import { Link, useLocation } from "react-router-dom";
import dukeLogo from "@/assets/duke-wordmark.png";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={dukeLogo} alt="Duke University" className="h-8 transition-opacity group-hover:opacity-80" />
          <span className="font-serif text-xl font-semibold text-foreground">
            Duke Entomology Lab
          </span>
        </Link>
        
        <div className="flex gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/orders"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/orders") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Orders
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
