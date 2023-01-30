import { useState } from 'react';
import { FileText, Image, File } from 'react-feather';
import shallow from 'zustand/shallow';

import { useCreateSecretFormState } from '~/store/store';
import { CardContainer } from '~/components/ui/containers/CardContainer';
import { IconCard } from '~/components/ui/cards/IconCard/IconCard';
import { AnimatedModal } from '~/components/ui/modals/AnimatedModal';

type SecretType = 'text' | 'image' | 'pdf';

interface Istate {
  modalOpen: boolean;
  secretType: SecretType;
}

export default function SecretTypeSelector() {
  // State
  const { setLink } = useCreateSecretFormState((state) => ({ setLink: state.setLink }), shallow);

  const [state, setState] = useState<Istate>({
    modalOpen: false,
    secretType: 'text',
  });

  const { modalOpen, secretType } = state;

  // Handlers
  const handleClick = (type: SecretType) => {
    if (modalOpen) {
      setLink('');
    }

    setState({ modalOpen: !state.modalOpen, secretType: type });
  };

  return (
    <div>
      <CardContainer>
        <IconCard
          title="Text message"
          content="Send an encrypted text"
          icon={<FileText />}
          color="blue"
          clickHandler={() => handleClick('text')}
        />
        <IconCard
          title="Image"
          content="Send an encrypted image"
          icon={<Image />}
          color="purple"
          clickHandler={() => handleClick('image')}
        />
      </CardContainer>

      <AnimatedModal isOpen={modalOpen} close={handleClick} type={secretType} />
    </div>
  );
}
