import React from 'react';
import styled from 'styled-components';
import { PropsChildren } from '../../../typings/types.components';

const Main = ({ children }: PropsChildren) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.section`
  padding: 2rem;
`;

export default Main;
