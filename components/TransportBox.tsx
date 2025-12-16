import React from 'react';
import { Train, Bus, Plane, Footprints, Info } from 'lucide-react';
import { TransportBoxProps } from '../types';

export const TransportBox: React.FC<TransportBoxProps> = ({ title, children, type = 'train' }) => {
  const getIcon = () => {
    switch (type) {
      case 'bus': return <Bus className="w-4 h-4 mr-2" />;
      case 'plane': return <Plane className="w-4 h-4 mr-2" />;
      case 'walk': return <Footprints className="w-4 h-4 mr-2" />;
      case 'info': return <Info className="w-4 h-4 mr-2" />;
      default: return <Train className="w-4 h-4 mr-2" />;
    }
  };

  const getColors = () => {
    if (type === 'info') return 'bg-red-50 border-red-400 text-red-900';
    return 'bg-blue-50 border-blue-400 text-blue-900';
  };

  return (
    <div className={`border-l-4 p-3 my-2 rounded-r-md text-sm ${getColors()}`}>
      {title && <div className="font-bold flex items-center mb-1">{getIcon()}{title}</div>}
      <div className="leading-relaxed">{children}</div>
    </div>
  );
};