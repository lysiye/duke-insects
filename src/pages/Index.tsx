import { HeroCarousel } from "@/components/HeroCarousel";
import { Navigation } from "@/components/Navigation";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroCarousel />
      
      <section className="container mx-auto px-6 py-12 animate-fade-in">
        <SearchBar />
      </section>
      
      <section className="container mx-auto px-6 py-12 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Capturing the Insect World of Duke University
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Duke University's campus is home to an extraordinary diversity of insects. 
            On this website, you will find a collection of photographs of insects
            captured in different locations on campus. 
          </p>
          <Link to="/orders">
            <Button size="lg" className="group">
              Explore the Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore the Incredible Insects Exhibit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Check out the Incredible Insects exhibit displayed at The Jerry and Bruce Chappell Family Gallery of the Duke University Libraries!
          </p>
          <a 
            href="https://exhibits.library.duke.edu/exhibits/show/insects/intro" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="group">
              Visit the Exhibit
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>The Insects of Duke: A Campus Collection</p>
          <p className="mt-2">Duke University &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
