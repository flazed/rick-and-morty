import React, { FC } from 'react';
import { CharacterStatus } from '../character-status/character-status';
import { CharacterGender } from '../character-gender/character-gender';
import { SCharacterInfo } from './character-info.styled';
import { Character } from '../../../types/api/api.type';

type CharacterStatusProps = Pick<Character, 'status' | 'gender'>;

export const CharacterInfo: FC<CharacterStatusProps> = (props) => {
  const { status, gender } = props;

  return (
    <SCharacterInfo>
      <CharacterStatus status={status} />
      <CharacterGender gender={gender} />
    </SCharacterInfo>
  );
};
