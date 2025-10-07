import { Link, useLocation } from "react-router-dom";
import { Bug } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Bug className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          <span className="font-serif text-xl font-semibold text-foreground">
            Duke Insects
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
        </div>
      </div>
    </nav>
  );
};
