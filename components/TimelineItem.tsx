import React from 'react';
import { TimeSlotProps } from '../types';

export const TimelineItem: React.FC<TimeSlotProps> = ({ time, title, description, icon, colorClass, children }) => {
  return (
    <div className={`relative z-10 mb-6 bg-white rounded-lg p-5 shadow-sm border-l-4 ${colorClass}`}>
      <div className="flex justify-between items-start">
        <div className="w-full">
          <div className="flex items-center mb-1">
            <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-bold mr-2 whitespace-nowrap">
              {time}
            </span>
            <h4 className="font-bold text-lg text-gray-800 leading-tight">{title}</h4>
          </div>
          {description && <div className="text-gray-600 text-sm mt-1">{description}</div>}
          {children}
        </div>
        {icon && <div className="ml-3 shrink-0 opacity-20 text-3xl hidden sm:block">{icon}</div>}
      </div>
    </div>
  );
};