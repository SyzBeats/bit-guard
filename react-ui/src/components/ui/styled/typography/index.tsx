import styled from 'styled-components';

type TitleType = {
  color: string;
  textAlign?: string;
};

const MainTitle = styled.h1<TitleType>`
  color: ${(props) => (props.color === 'light' ? '#fff' : props.theme.colors.highlight_blue)};
  font-size: 4rem;
  letter-spacing: 1px;
  margin: 0 0 1.85rem 0;
  text-align: ${(props) => props.textAlign || 'left'};
`;

const SecondaryTitle = styled.h2<TitleType>`
  color: ${(props) => (props.color === 'light' ? '#fff' : props.theme.colors.highlight)};
  font-size: 2.45rem;
  letter-spacing: 1px;
  margin: 2rem 0;
  text-align: ${(props) => props.textAlign || 'left'};
`;

const TertiaryTitle = styled.h3`
  color: #fff;
  font-size: 1.55rem;
  letter-spacing: 1px;
  margin: 1.85rem 0;
`;

const DashboardSectionTitle = styled.h4`
  color: ${(props) => (props.color === 'light' ? '#fff' : props.theme.colors.blue_dark)};
  font-size: 2.45rem;
  letter-spacing: 1px;
  margin: 2rem 0;
`;

export { MainTitle, SecondaryTitle, TertiaryTitle, DashboardSectionTitle };
