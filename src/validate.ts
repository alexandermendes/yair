import { logger } from './logger';
import { ResizeOptions } from './types';

export const getValidArgs = (args: ResizeOptions) => {
  const validArgs: ResizeOptions = {};

  if (args.w) {
    if (!Number.isFinite(args.w) || args.w < 0) {
      logger.warn('w arg is not valid');
    } else {
      validArgs.w = Number(args.w);
    }
  }

  if (args.h) {
    if (!Number.isFinite(args.h) || args.h < 0) {
      logger.warn('h arg is not valid');
    } else {
      validArgs.h = Number(args.h);
    }
  }

  if (args.quality) {
    const quality = Number(args.quality);

    if (!Number.isFinite(quality) || quality < 0 || quality > 100) {
      logger.warn('quality arg is not valid');
    } else {
      validArgs.quality = quality;
    }
  }

  if (args.resize) {
    if (!/^\d+(px)?,\d+(px)?$/.test(args.resize)) {
      logger.warn('resize arg is not valid');
    } else {
      validArgs.resize = args.resize;
    }
  }

  if (args.crop_strategy) {
    if (!/^(smart|entropy|attention)$/.test(args.crop_strategy)) {
      logger.warn('crop_strategy arg is not valid');
    } else {
      validArgs.crop_strategy = args.crop_strategy;
    }
  }

  if (args.gravity) {
    if (
      !/^(north|northeast|east|southeast|south|southwest|west|northwest|center)$/.test(
        args.gravity,
      )
    ) {
      logger.warn('gravity arg is not valid');
    } else {
      validArgs.gravity = args.gravity;
    }
  }

  if (args.fit) {
    if (!/^\d+(px)?,\d+(px)?$/.test(args.fit)) {
      logger.warn('fit arg is not valid');
    } else {
      validArgs.fit = args.fit;
    }
  }

  if (args.crop) {
    if (args.crop.some((cropItem) => !/^\d+(px)$/.test(cropItem))) {
      logger.warn('crop arg is not valid');
    } else {
      validArgs.crop = args.crop;
    }
  }

  if (args.zoom) {
    if (!/^\d+(\.\d+)?$/.test(args.zoom)) {
      logger.warn('zoom arg is not valid');
    } else {
      validArgs.zoom = args.zoom;
    }
  }

  if (args.lb) {
    if (!/^\d+(px)?,\d+(px)?$/.test(args.lb)) {
      logger.warn('lb arg is not valid');
    } else {
      validArgs.lb = args.lb;
    }
  }

  if (args.background) {
    if (!/^#[a-f0-9]{3}[a-f0-9]{3}?$/.test(args.background)) {
      logger.warn('background arg is not valid');
    } else {
      validArgs.background = args.background;
    }
  }

  return validArgs;
};
