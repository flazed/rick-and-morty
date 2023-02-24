import React, { FC } from 'react';
import { SCharacterGender } from './character-gender.styled';
import { Character } from '../../../types/api/api.type';

type CharacterGenderProps = Pick<Character, 'gender'>;

export const CharacterGender: FC<CharacterGenderProps> = ({ gender }) => (
  <SCharacterGender gender={gender}>
    {gender}
  </SCharacterGender>
);
