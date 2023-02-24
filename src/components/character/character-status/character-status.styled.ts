import styled from 'styled-components';
import { Character } from '../../../types/api/api.type';
import { ECharacterStatus } from '../../../types/character/status.enum';

type SCharacterStatusProps = Pick<Character, 'status'>;

const characterStatusColor = {
  [ECharacterStatus.ALIVE]: '#50982a',
  [ECharacterStatus.DEAD]: '#a82d21',
  [ECharacterStatus.UNKNOW]: '#4f5559',
};

export const SCharacterStatus = styled.span<SCharacterStatusProps>`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    background: ${({ status }) => characterStatusColor[status]};
    border-radius: 50px;
  }
`;
