export interface CarouselPropsInterface {
    images: string[];
    autoSlide?: boolean;
    autoSlideInterval?: number; 
  }

export interface NavItemPropsInterface {
    label: string;
    onClick?: () => void;
    isSearchOpen?: boolean;
    setIsSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProvidersDropdownProps {
    selectedProviders: string[];
    onProviderChange: (provider: string) => void;
}

export default interface ImageGridPropsInterface {
    searchTerm: string;
    selectedCategory: string | null;
    selectedProviders: string[];
    favorites: string[];
    toggleFavorite: (id: string) => void;
}

export interface GameInterface {
    id: string;
    title: string;
    category: string;
    provider: string;
    imageUrl: string;
}

export type MenuItemInterface = {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
  };

export  interface ComponentState {
    searchTerm: string;
    isSearchOpen: boolean;
    selectedCategory: string | null;
    selectedProviders: string[];
    tempProviders: string[];
    favorites: string[];
  }


export const initialStateComponents: ComponentState = {
    searchTerm: '',
    isSearchOpen: false,
    selectedCategory: null,
    selectedProviders: [],
    tempProviders: [],
    favorites: [],
  };


  export interface GamesState {

}



