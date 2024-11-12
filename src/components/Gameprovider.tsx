import React from 'react';
import { ProvidersDropdownProps } from '../global_components/GlobalInterface.tsx';
import  {providers}  from '../global_components/GlobalData.tsx';

    const Gameprovider:  React.FC<ProvidersDropdownProps> = ({selectedProviders,onProviderChange }) => {
    return (
        <div className="relative w-full max-w-xs">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-2 max-h-64 overflow-y-auto">
                {providers.map((provider) => (
                    <label key={provider} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={selectedProviders.includes(provider)}
                        onChange={() => onProviderChange(provider)}
                        className="mr-2"
                    />
                    {provider}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Gameprovider;
