import { useSelector } from "react-redux";
import { RootState } from "../Store";
import { useEffect } from "react";

export function componentFunction() {
    const searchTerm = useSelector((state: RootState) => state.component.searchTerm);
    const isSearchOpen = useSelector((state: RootState) => state.component.isSearchOpen);
    const selectedCategory = useSelector((state: RootState) => state.component.selectedCategory);
    const selectedProviders = useSelector((state: RootState) => state.component.selectedProviders);
    const tempProviders = useSelector((state: RootState) => state.component.tempProviders);
    const favorites = useSelector((state: RootState) => state.component.favorites);
    return { isSearchOpen, searchTerm, tempProviders, selectedCategory, selectedProviders, favorites };
  }
  
export default function TableDataFunctions() {
    const searchTerm = useSelector((state: RootState) => state.component.searchTerm);
    const selectedCategory = useSelector((state: RootState) => state.component.selectedCategory);
    const selectedProviders = useSelector((state: RootState) => state.component.selectedProviders);
    const favorites = useSelector((state: RootState) => state.component.favorites);
    return { searchTerm, selectedCategory, selectedProviders, favorites };
  }
  

export function TableDataFilterFunction(games: any,searchTerm: string, selectedCategory: string | null, selectedProviders: string | any[]) {

  return games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || game.category === selectedCategory;
    const matchesProvider = selectedProviders.length === 0 || selectedProviders.includes(game.provider);
    return matchesSearch && matchesCategory && matchesProvider;
  });
}

export function carouselOnLoadFunction(handleNext: TimerHandler, autoSlideInterval: number, autoSlide: boolean) {
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(handleNext, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval]);
}