import { HeroCarousel } from "@/components/HeroCarousel";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <HeroCarousel />
      
      <section className="container mx-auto px-6 py-20 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discovering Campus Biodiversity
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Duke University's campus is home to an extraordinary diversity of insects, 
            representing dozens of families and orders. This comprehensive photographic 
            collection documents the remarkable arthropod fauna found within our campus 
            ecosystem, from delicate lacewings to formidable beetles.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Each specimen has been carefully photographed and catalogued, providing both 
            scientific documentation and artistic appreciation of these often-overlooked 
            creatures that share our environment. Many images include detailed macro 
            photography and scanning electron microscopy (SEM) to reveal intricate 
            structures invisible to the naked eye.
          </p>
          <Link to="/orders">
            <Button size="lg" className="group">
              Explore the Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>The Insects of Duke: A Campus Collection</p>
          <p className="mt-2">Duke University &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
