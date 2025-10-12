import { Navigation } from "@/components/Navigation";
import { taxonomy } from "@/data/taxonomy";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SpeciesDetail = () => {
  const { speciesId } = useParams();
  
  let foundSpecies = null;
  let foundFamily = null;
  let foundOrder = null;

  for (const superorder of taxonomy) {
    for (const order of superorder.orders) {
      for (const family of order.families) {
        const species = family.species.find(s => s.id === speciesId);
        if (species) {
          foundSpecies = species;
          foundFamily = family;
          foundOrder = order;
          break;
        }
      }
      if (foundSpecies) break;
    }
    if (foundSpecies) break;
  }

  if (!foundSpecies) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Species Not Found</h1>
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
        <Link to={`/order/${foundOrder?.id}`}>
          <Button variant="ghost" className="mb-6 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to {foundOrder?.name}
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="text-sm text-muted-foreground mb-2">
              Order: {foundOrder?.name} → Family: {foundFamily?.name}
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-3">
              <em>{foundSpecies.scientificName}</em>
            </h1>
            <p className="text-2xl text-primary">
              {foundSpecies.commonName}
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 mb-8 border border-border animate-slide-up">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Image Gallery
            </h2>
            {foundSpecies.images && foundSpecies.images.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {foundSpecies.images.map((image, index) => {
                    const imageSrc = new URL(`/src/assets/species/${image}`, import.meta.url).href;
                    return (
                      <div key={index} className="rounded-lg overflow-hidden bg-muted aspect-square">
                        <img 
                          src={imageSrc} 
                          alt={`${foundSpecies.scientificName} - view ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                  <p className="text-muted-foreground text-lg">
                    Upload your photographs of <em>{foundSpecies.scientificName}</em> to display them here
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  This gallery will showcase multiple angles, macro photography, and SEM images when available.
                </p>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Taxonomy
              </h3>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="text-muted-foreground">Order:</dt>
                  <dd className="text-foreground font-medium">{foundOrder?.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Family:</dt>
                  <dd className="text-foreground font-medium">{foundFamily?.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Species:</dt>
                  <dd className="text-foreground font-medium">
                    <em>{foundSpecies.scientificName}</em>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Common Name
              </h3>
              <p className="text-foreground">{foundSpecies.commonName}</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>The Insects of Duke: A Campus Collection</p>
        </div>
      </footer>
    </div>
  );
};

export default SpeciesDetail;
