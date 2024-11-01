import styled from 'styled-components';

const ButtonWrapper = styled.span`
  & button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.4rem;
    box-shadow: ${({ theme }) => theme.shadows.depth_1};

    // colors
    background: ${({ theme }) => theme.colors.highlight_blue};
    color: #fff;

    // font
    font-size: 1.5rem;
    letter-spacing: 1.5px;
    font-weight: 400;

    // spacing
    margin: 1rem 0;

    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }
`;

export { ButtonWrapper };
