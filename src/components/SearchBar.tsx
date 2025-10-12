import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { taxonomy } from "@/data/taxonomy";
import { Link } from "react-router-dom";
import shrugCockroach from "@/assets/shrugging-cockroach.jpg";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Flatten all species for searching
  const allSpecies = useMemo(() => {
    const species: Array<{
      id: string;
      scientificName: string;
      commonName: string;
      orderName: string;
      orderId: string;
    }> = [];
    
    taxonomy.forEach(superorder => {
      superorder.orders.forEach(order => {
        order.families.forEach(family => {
          family.species.forEach(s => {
            species.push({
              id: s.id,
              scientificName: s.scientificName,
              commonName: s.commonName,
              orderName: order.name,
              orderId: order.id,
            });
          });
        });
      });
    });
    
    return species;
  }, []);

  const filteredSpecies = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allSpecies.filter(
      species =>
        species.scientificName.toLowerCase().includes(query) ||
        species.commonName.toLowerCase().includes(query)
    );
  }, [searchQuery, allSpecies]);

  const handleFocus = () => setIsSearching(true);
  const handleBlur = () => {
    // Delay to allow clicks on results
    setTimeout(() => setIsSearching(false), 200);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for insects by common or scientific name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="pl-10"
        />
      </div>

      {isSearching && searchQuery.trim() && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {filteredSpecies.length > 0 ? (
            <div className="py-2">
              {filteredSpecies.map((species) => (
                <Link
                  key={species.id}
                  to={`/species/${species.id}`}
                  className="block px-4 py-3 hover:bg-accent transition-colors"
                >
                  <div className="font-medium text-foreground">
                    <em>{species.scientificName}</em>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {species.commonName} • {species.orderName}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-8 px-4 text-center">
              <img 
                src={shrugCockroach} 
                alt="Shrugging cockroach"
                className="w-48 h-48 object-contain mx-auto mb-4 rounded-lg"
              />
              <p className="text-lg text-muted-foreground">
                Sorry! What you are looking for hasn't been added to our website's collection yet!
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Image credit: <a href="https://www.reddit.com/r/photoshopbattles/comments/837t7n/psbattle_this_shrugging_cockroach_%E3%83%84/" target="_blank" rel="noopener noreferrer" className="hover:underline">Reddit</a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
