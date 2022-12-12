import React from 'react';
import styled from 'styled-components';

import { ExternalSvg } from '../image/ExternalSvg';
import { IconName } from '../../../../typings/enums';

// icons
import IconFingerprint from '../../../../images/security/fi__fingerprint-lock.svg';
import IconLock from '../../../../images/security/fi__lock-connection.svg';
import IconPincode from '../../../../images/security/fi__pin-code.svg';
import IconDatabase from '../../../../images/security/fi__secure-database.svg';
import IconMessage from '../../../../images/security/fi__secure-message.svg';
import IconWorld from '../../../../images/security/fi__world-secure.svg';
import IconWall from '../../../../images/security/fi__wall.svg';
import { SecondaryTitle } from '../typography';

type IconBoxType = {
  type: IconName;
  title: string;
  content: string | JSX.Element;
  textColor: 'light' | 'dark';
};

const getIcon = (type: IconName) => {
  switch (type) {
    case IconName.FINGERPRINT:
      return <ExternalSvg src={IconFingerprint} />;
    case IconName.LOCK:
      return <ExternalSvg src={IconLock} />;
    case IconName.PINCODE:
      return <ExternalSvg src={IconPincode} />;
    case IconName.DATABASE:
      return <ExternalSvg src={IconDatabase} />;
    case IconName.MESSAGE:
      return <ExternalSvg src={IconMessage} />;
    case IconName.WALL:
      return <ExternalSvg src={IconWall} />;
    case IconName.WORLD:
      return <ExternalSvg src={IconWorld} />;
  }
};

const IconBox = ({ type, title, content, textColor }: IconBoxType) => {
  return (
    <Box>
      {getIcon(type)}
      <SecondaryTitle color={textColor} textAlign="center">
        {title}
      </SecondaryTitle>
      <p>{content}</p>
    </Box>
  );
};

const Box = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  box-shadow: ${({ theme }) => theme.shadows.card_1};
  border-radius: 1rem;
  padding: 0.75rem;
  transition: transform 0.4s ease-in-out;

  p {
    text-align: center;
  }
`;

export { IconBox };
