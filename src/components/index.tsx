// src/components/Component.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setSearchTerm,
  toggleSearchOpen,
  setSelectedCategory,
  setTempProviders,
  applyFilters,
  toggleFavorite,
} from '../Slice';
import Header from '../shared_components/Header';
import Footer from '../shared_components/Footer';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import TableData from '../components/Tabledata';
import Gameprovider from './Gameprovider';
import { sampleGames } from '../global_components/GlobalData';
import { carouselImages } from '../global_components/GlobalData';
import { componentFunction } from '../global_components/GlobalFunction';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const { isSearchOpen, searchTerm, tempProviders, selectedCategory, selectedProviders, favorites } = componentFunction();

  return (
    <div className="App min-h-screen bg-gray-50 flex flex-col items-center">
      <Header />
      <Carousel images={carouselImages} autoSlide={true} autoSlideInterval={3000} />

      <div className="w-full bg-white text-center py-3 shadow-md mt-4">
        <p className="text-yellow-500 font-semibold">
          🎉 ¡FELICIDADES artxxxipa! GANADOR DESTACADO 🎉
        </p>
      </div>

      <div className="w-full bg-white py-4 shadow-md mt-4">
        <div className="flex justify-around items-center">
          <Categories
            label="SEARCH"
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={() => dispatch(toggleSearchOpen())}
          />
          <Categories label="SLOTS" onClick={() => dispatch(setSelectedCategory('slots'))} />
          <Categories label="LIVE" onClick={() => dispatch(setSelectedCategory('live'))} />
          <Categories label="JACKPOTS" onClick={() => dispatch(setSelectedCategory('jackpots'))} />
          <Categories label="TABLE GAMES" onClick={() => dispatch(setSelectedCategory('table'))} />
          <Categories label="ALL" onClick={() => dispatch(setSelectedCategory(null))} />
        </div>

        {isSearchOpen && (
          <div className="w-full flex justify-center mt-4 items-center gap-4">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="border border-gray-300 rounded-lg px-4 py-2 w-3/4"
            />
            <Gameprovider
              selectedProviders={tempProviders}
              onProviderChange={(provider) => dispatch(setTempProviders(provider))}
            />
            <button
              onClick={() => dispatch(applyFilters())}
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>

      <div className="p-100 bg-gray-50 overflow-y-auto max-h-[500px]">
        <TableData
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedProviders={selectedProviders}
          favorites={favorites}
          toggleFavorite={(id) => dispatch(toggleFavorite(id))}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Component;

