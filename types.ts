import React from 'react';

export type RouteOption = 'option1' | 'option2';

export interface TimeSlotProps {
  time: string;
  title: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  colorClass: string; // e.g., 'border-blue-500'
  children?: React.ReactNode;
}

export interface TransportBoxProps {
  title?: string;
  children: React.ReactNode;
  type?: 'train' | 'bus' | 'plane' | 'walk' | 'info';
}