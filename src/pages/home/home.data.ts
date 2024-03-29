import CharactersBanner from '../../static/home_banners/characters.png';
import LocationsBanner from '../../static/home_banners/locations.png';
import EpisodesBanner from '../../static/home_banners/episodes.png';

import RickSlide from '../../static/home_slides/rick.png';
import MortySlide from '../../static/home_slides/morty.png';
import SummerSlide from '../../static/home_slides/summer.png';
import BethSlide from '../../static/home_slides/beth.png';
import JerrySlide from '../../static/home_slides/jerry.png';

import { charactersLink, locationsLink, espisodesLink } from '../../static-data';

export const banners = [
  {
    id: 1, title: 'Characters', img: CharactersBanner, link: `/${charactersLink}`,
  },
  {
    id: 2, title: 'Locations', img: LocationsBanner, link: `/${locationsLink}`,
  },
  {
    id: 3, title: 'Episodes', img: EpisodesBanner, link: `/${espisodesLink}`,
  },
];

export const slides = [
  {
    title: 'Rick Sanchez',
    img: RickSlide,
    path: `/${charactersLink}/1`,
  },
  {
    title: 'Morty Smith',
    img: MortySlide,
    path: `/${charactersLink}/2`,
  },
  {
    title: 'Summer Smith',
    img: SummerSlide,
    path: `/${charactersLink}/3`,
  },
  {
    title: 'Beth Smith',
    img: BethSlide,
    path: `/${charactersLink}/4`,
  },
  {
    title: 'Jerry Smith',
    img: JerrySlide,
    path: `/${charactersLink}/5`,
  },
];
