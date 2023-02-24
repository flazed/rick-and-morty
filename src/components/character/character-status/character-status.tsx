import React, { FC } from 'react';
import { SCharacterStatus } from './character-status.styled';
import { Character } from '../../../types/api/api.type';

type CharacterStatusProps = Pick<Character, 'status'>;

export const CharacterStatus: FC<CharacterStatusProps> = ({ status }) => (
  <SCharacterStatus status={status}>
    {status}
  </SCharacterStatus>
);
