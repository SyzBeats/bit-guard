import styled from 'styled-components';

type TitleType = {
  color: string;
  textAlign: string;
};

const MainTitle = styled.h1`
  color: white;
  font-size: 4rem;
  letter-spacing: 1px;
  margin: 0 0 1.85rem 0;
`;

const SecondaryTitle = styled.h2<TitleType>`
  color: ${(props) => (props.color === 'light' ? '#fff' : '#222')};
  font-size: 2.45rem;
  letter-spacing: 1px;
  margin: 2rem 0;
  text-align: ${(props) => props.textAlign};
`;

const TertiaryTitle = styled.h3`
  color: white;
  font-size: 1.55rem;
  letter-spacing: 1px;
  margin: 1.85rem 0;
`;

export { MainTitle, SecondaryTitle, TertiaryTitle };
