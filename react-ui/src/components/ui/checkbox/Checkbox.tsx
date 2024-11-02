import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
	label?: string;
	size?: 's';
	backgroundColor?: string;
	checked: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
	required?: boolean;
}

const Checkbox = ({ label, size, backgroundColor, checked, onChange, disabled, required }: Props) => {
	return (
		<LabelContainer size={size} disabled={!!disabled}>
			<CheckboxInput
				type='checkbox'
				checked={checked}
				onChange={({ target }): void => onChange?.(target.checked)}
				aria-label={label}
				disabled={!!disabled}
				required={required}
			/>
			<StyledCheckmark size={size} selected={checked} backgroundColor={backgroundColor} />
		</LabelContainer>
	);
};


// --- Styled components ---

const LabelContainer = styled.label<{ size?: 's'; disabled?: boolean }>`
  position: relative;
  display: block;
  flex-shrink: 0;
  user-select: none;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: ${({ size }) => (size === 's' ? '0' : '0.5rem')};
  width: ${({ size }) => (size === 's' ? '1.8rem' : '2.2rem')};
  height: ${({ size }) => (size === 's' ? '1.8rem' : '2.2rem')};

  ${({ disabled }) =>
          disabled &&
          css`
            opacity: 0.5;
            cursor: not-allowed;
          `}
`;

const CheckboxInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + span::after {
    display: block;
  }
`;

const StyledCheckmark = styled.span<{
	size?: 's';
	selected?: boolean;
	backgroundColor?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ size }) => (size === 's' ? '1.8rem' : '2.2rem')};
  height: ${({ size }) => (size === 's' ? '1.8rem' : '2.2rem')};
  border-radius: ${({ size }) => (size === 's' ? '0.3rem' : '0.5rem')};
  background-color: ${({ theme, selected, backgroundColor }) =>
          selected ? backgroundColor || theme.colors.blue_dark : '#ddd'};
  transition: background-color 0.2s;

  &::after {
    content: '';
    position: absolute;
    display: none;
    top: ${({ size }) => (size === 's' ? '0.3rem' : '0.4rem')};
    left: ${({ size }) => (size === 's' ? '0.65rem' : '0.8rem')};
    width: ${({ size }) => (size === 's' ? '0.5rem' : '0.6rem')};
    height: ${({ size }) => (size === 's' ? '0.8rem' : '1.1rem')};
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;


export default Checkbox;