import { Navigation } from "@/components/Navigation";
import { taxonomy } from "@/data/taxonomy";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderDetail = () => {
  const { orderId } = useParams();
  
  const order = taxonomy
    .flatMap(s => s.orders)
    .find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Order Not Found</h1>
          <Link to="/orders">
            <Button>Back to Orders</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-28 pb-20">
        <Link to="/orders">
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Orders
          </Button>
        </Link>

        <div className="mb-12 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            {order.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {order.families.length} families, {order.families.reduce((acc, f) => acc + f.species.length, 0)} species
          </p>
        </div>

        <div className="space-y-12">
          {order.families.map((family) => (
            <div key={family.id} className="animate-slide-up">
              <h2 className="font-serif text-3xl font-semibold text-primary mb-6">
                Family: {family.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {family.species.map((species) => (
                  <Link 
                    key={species.id}
                    to={`/species/${species.id}`}
                    className="group"
                  >
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                              <em>{species.scientificName}</em>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {species.commonName}
                            </p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>The Insects of Duke: A Campus Collection</p>
        </div>
      </footer>
    </div>
  );
};

export default OrderDetail;
