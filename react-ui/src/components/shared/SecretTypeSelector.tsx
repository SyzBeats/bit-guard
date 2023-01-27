import { MouseEventHandler, useState } from 'react';
import { FileText, Image, File } from 'react-feather';

import { CardContainer } from '../ui/containers/CardContainer';
import { IconCard } from '../ui/cards/IconCard/IconCard';
import { AnimatedModal } from '../ui/modals/AnimatedModal';

type SecretType = 'text' | 'image' | 'pdf';

export default function SecretTypeSelector() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<SecretType>('text');

  const handleClick = (type: SecretType) => {
    setType(type);
    setOpen(!open);
  };

  return (
    <div>
      <CardContainer>
        <IconCard
          title="Text message"
          content="Send encrypted text"
          icon={<FileText />}
          color="blue"
          clickHandler={() => handleClick('text')}
        />
        <IconCard
          title="Image"
          content="send and encrypted image"
          icon={<Image />}
          color="purple"
          clickHandler={() => handleClick('image')}
        />
        <IconCard
          title="Document"
          content="Send an encrypted document"
          icon={<File />}
          color="green"
          clickHandler={() => handleClick('pdf')}
        />
      </CardContainer>

      <AnimatedModal isOpen={open} close={handleClick} type={type} />
    </div>
  );
}
