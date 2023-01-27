import { MouseEventHandler, useState } from 'react';
import { FileText, Image, File } from 'react-feather';

import { CardContainer } from '../ui/containers/CardContainer';
import { IconCard } from '../ui/cards/IconCard/IconCard';
import { AnimatedModal } from '../ui/modals/AnimatedModal';

export default function SecretTypeSelector() {
  const [open, setOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <CardContainer>
        <IconCard
          title="Encrypted text message"
          content="Send encrypted text to your recipient"
          icon={<FileText />}
          color="blue"
          clickHandler={handleClick}
        />
        <IconCard
          title="Ecrypted Image file"
          content="send and encrypted image"
          icon={<Image />}
          color="purple"
          clickHandler={handleClick}
        />
        <IconCard
          title="Encrypted .pdf file"
          content="Send an encrypted PDF document"
          icon={<File />}
          color="green"
          clickHandler={handleClick}
        />
      </CardContainer>

      <AnimatedModal isOpen={open} close={handleClick} />
    </div>
  );
}
