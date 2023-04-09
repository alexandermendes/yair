import { OutputInfo } from 'sharp';

export type ResizeOptions = {
  fileName?: string;
  w?: number;
  h?: number;
  quality?: number;
  resize?: string;
  webp?: boolean;
  crop?: string[];
  crop_strategy?: 'smart' | 'entropy' | 'attention';
  gravity?:
    | 'north'
    | 'northeast'
    | 'east'
    | 'southeast'
    | 'south'
    | 'southwest'
    | 'west'
    | 'northwest'
    | 'center';
  background?: string;
  zoom?: string;
  lb?: string;
  fit?: string;
};

export type ResizedImageOutput = { data: Buffer; info: OutputInfo };
