import React, { FC } from 'react';
import { Row } from '../../row/row';
import { CharacterInfo } from '../character-info/character-info';
import { Character } from '../../../types/api/api.type';
import {
  SCharacterCard, SCharacterCardImageContainer, SCharacterCardImage, SCharacterCardContent,
} from './character-card.styled';
import { SCardTitle } from '../../layouts/card/card.styled';
import { charactersLink } from '../../../static-data';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const {
    id, name, gender, image, status, location, species,
  } = character;

  return (
    <SCharacterCard>
      <SCharacterCardImageContainer>
        <SCharacterCardImage src={image} />
      </SCharacterCardImageContainer>
      <SCharacterCardContent>
        <SCardTitle href={`${charactersLink}/${id}`}>{name}</SCardTitle>
        <CharacterInfo status={status} gender={gender} />
        <Row title="Last known location:">{location.name}</Row>
        <Row title="Species:">{species}</Row>
      </SCharacterCardContent>
    </SCharacterCard>
  );
};
