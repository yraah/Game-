// src/components/ImageGrid.tsx
import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../Slice';
import { fetchGames } from '../mock_api/TableDataApi';
import ImageGridPropsInterface from '../global_components/GlobalInterface';
import TableDataFunctions from '../global_components/GlobalFunction'
import { TableDataFilterFunction } from '../global_components/GlobalFunction';
import { GameInterface } from '../global_components/GlobalInterface';


const ImageGrid: React.FC<ImageGridPropsInterface> = () => {
  const [games, setGames] = useState<GameInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const loadGames = async () => {
    try {
      const fetchedGames = await fetchGames();
      setGames(fetchedGames);
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setLoading(false);
    }
  };

   useEffect(() => {
    loadGames();
  }, []);

  const { searchTerm, selectedCategory, selectedProviders, favorites } = TableDataFunctions();
  const filteredGames = TableDataFilterFunction(games, searchTerm, selectedCategory, selectedProviders);

  if (loading) return <div className="text-center w-full py-8">Loading games...</div>;

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {filteredGames.map((game) => (
        <div key={game.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={game.imageUrl} alt={game.title} className="w-full h-32 object-cover" />
          <div className="p-2 flex justify-between items-center">
            <p className="text-sm font-semibold">{game.title}</p>
            <button
              onClick={() => dispatch(toggleFavorite(game.id))}
              className={`p-1 rounded-full ${favorites.includes(game.id) ? 'text-yellow-500' : 'text-gray-400'}`}
              title={favorites.includes(game.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            >
              {favorites.includes(game.id) ? '★' : '☆'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

 
};

export default ImageGrid;

