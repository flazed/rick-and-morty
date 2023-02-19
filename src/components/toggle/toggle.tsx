import React, { FC, useState } from 'react';
import { SToggle, SToggleDot, SToggleProps } from './toggle.styled';

interface ToggleProps extends Partial<SToggleProps> {
  onToggle: () => void;
  isDefaultActive?: boolean;
}

export const Toggle: FC<ToggleProps> = (props) => {
  const {
    onToggle, isDefaultActive = false,
  } = props;

  const [isActive, setIsActive] = useState(isDefaultActive);

  const handleToggle = () => {
    onToggle();
    setIsActive(!isActive);
  };

  return (
    <SToggle onClick={handleToggle} isToggled={isActive}>
      <SToggleDot isToggled={isActive} />
    </SToggle>
  );
};
