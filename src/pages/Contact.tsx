import { Navigation } from "@/components/Navigation";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-8">
            Contact Us
          </h1>
          
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Contribute to Our Collection
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  If you have any questions or would like to contribute to the image collection 
                  (for species that are documented or undocumented on here), please don't hesitate 
                  to reach out to us at{" "}
                  <a 
                    href="mailto:hfn@duke.edu" 
                    className="text-primary hover:underline font-medium"
                  >
                    hfn@duke.edu
                  </a>
                  .
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If we end up adding your photographs to our collection, we will of course credit 
                  your contribution!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>The Insects of Duke: A Campus Collection</p>
          <p className="mt-2">Duke University &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
