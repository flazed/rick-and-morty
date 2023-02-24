import styled from 'styled-components';
import { Character } from '../../../types/api/api.type';
import { ECharacterGender } from '../../../types/character/gender.enum';

type SCharacterGenderProps = Pick<Character, 'gender'>;

const characterGenderColor = {
  [ECharacterGender.MALE]: '#0086e7',
  [ECharacterGender.FEMALE]: '#e10095',
  [ECharacterGender.GENDERLESS]: '#4f5559',
  [ECharacterGender.UNKNOWN]: '#4f5559',
};

export const SCharacterGender = styled.span<SCharacterGenderProps>`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: ${({ gender }) => characterGenderColor[gender]};
    border-radius: 50px;
  }
`;
