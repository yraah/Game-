import React from "react";
import { GameInterface } from "./GlobalInterface.tsx";
import { MenuItemInterface } from "./GlobalInterface.tsx";

export const providers = ['Provider A', 'Provider B', 'Provider C', 'Provider D'];

export const sampleGames: GameInterface[] = [
    { id: '1', title: 'Game A', category: 'slots', provider: 'Provider A', imageUrl: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Game B', category: 'jackpots', provider: 'Provider B', imageUrl: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Game C', category: 'live', provider: 'Provider C', imageUrl: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Game D', category: 'table', provider: 'Provider D', imageUrl: 'https://via.placeholder.com/150' },
    { id: '5', title: 'Game E', category: 'slots', provider: 'Provider A', imageUrl: 'https://via.placeholder.com/150' },
    { id: '6', title: 'Game F', category: 'jackpots', provider: 'Provider B', imageUrl: 'https://via.placeholder.com/150' },
    { id: '7', title: 'Game G', category: 'live', provider: 'Provider V', imageUrl: 'https://via.placeholder.com/150' },
    { id: '8', title: 'Game H', category: 'table', provider: 'Provider D', imageUrl: 'https://via.placeholder.com/150' },
    { id: '9', title: 'Game I', category: 'slots', provider: 'Provider A', imageUrl: 'https://via.placeholder.com/150' },
    { id: '10', title: 'Game J', category: 'jackpots', provider: 'Provider B', imageUrl: 'https://via.placeholder.com/150' },
    { id: '11', title: 'Game K', category: 'live', provider: 'Provider C', imageUrl: 'https://via.placeholder.com/150' },
    { id: '12', title: 'Game L', category: 'table', provider: 'Provider D', imageUrl: 'https://via.placeholder.com/150' },
];

export const carouselImages = [
    'https://via.placeholder.com/800x300?text=Slide+1',
    'https://via.placeholder.com/800x300?text=Slide+2',
    'https://via.placeholder.com/800x300?text=Slide+3',
];

export const menuItemsData: MenuItemInterface[] = [
    {
      label: 'SPORTS',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15.75v4.5m-3-4.5v3a3 3 0 006 0v-3m5.25-1.5v3a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75v-3m16.5-1.5h-6.75m0 0a5.25 5.25 0 11-10.5 0h6.75z"
          />
        </svg>
      ),
      onClick: () => {},
    },
    {
      label: 'FAVORITES',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.75 5.75l6.25 6.25m0 0l6.25-6.25m-6.25 6.25v5.5M5.75 19.25h12.5"
          />
        </svg>
      ),
      onClick: () => {},
    },
    {
      label: 'INVITE',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v3m-4.5 9v3m9-3v3M12 8.25a3 3 0 110 6 3 3 0 010-6z"
          />
        </svg>
      ),
      onClick: () => {},
    },
    {
      label: 'CASINO LIVE',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
        </svg>
      ),
      onClick: () => {},
    },
    {
      label: 'CASHIER',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 15L12 4.5l6.75 10.5h-13.5z"
          />
        </svg>
      ),
      onClick: () => {},
    },
];

