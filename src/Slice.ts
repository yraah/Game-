// src/redux/componentSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentState } from './global_components/GlobalInterface';



const initialState: ComponentState = {
  searchTerm: '',
  isSearchOpen: false,
  selectedCategory: null,
  selectedProviders: [],
  tempProviders: [],
  favorites: [],
};

const componentSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    toggleSearchOpen: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    setTempProviders: (state, action: PayloadAction<string>) => {
      if (state.tempProviders.includes(action.payload)) {
        state.tempProviders = state.tempProviders.filter((p) => p !== action.payload);
      } else {
        state.tempProviders.push(action.payload);
      }
    },
    applyFilters: (state) => {
      state.selectedProviders = state.tempProviders;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((fav) => fav !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});


export const {
  setSearchTerm,
  toggleSearchOpen,
  setSelectedCategory,
  setTempProviders,
  applyFilters,
  toggleFavorite,
} = componentSlice.actions;

export default componentSlice.reducer;
