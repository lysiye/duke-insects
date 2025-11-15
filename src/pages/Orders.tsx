import { Navigation } from "@/components/Navigation";
import { taxonomy } from "@/data/taxonomy";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

const Orders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-28 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Taxonomic Orders
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse insects by their taxonomic classification
          </p>
        </div>

        {taxonomy.map((superorder, superIndex) => (
          <div key={superIndex} className="mb-16 animate-slide-up" style={{ animationDelay: `${superIndex * 0.1}s` }}>
            <h2 className="font-serif text-3xl font-bold text-primary mb-8 border-b border-border pb-2">
              {superorder.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {superorder.orders.map((order) => (
                <Link 
                  key={order.id} 
                  to={`/order/${order.id}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {order.icon && (() => {
                            const IconComponent = LucideIcons[order.icon.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join('') as keyof typeof LucideIcons] as any;
                            return IconComponent ? <IconComponent className="h-8 w-8 text-primary" /> : null;
                          })()}
                          <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {order.name}
                          </h3>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {order.families.length} {order.families.length === 1 ? 'Family' : 'Families'}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {order.families.reduce((acc, family) => acc + family.species.length, 0)} Species
                        </p>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground font-medium">
                          Families: {order.families.map(f => f.name).join(', ')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>The Insects of Duke: A Campus Collection</p>
        </div>
      </footer>
    </div>
  );
};

export default Orders;
