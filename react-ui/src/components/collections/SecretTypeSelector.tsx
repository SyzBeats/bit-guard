import { useState } from 'react';
import { FileText, Image, File as FileIcon } from 'react-feather';
import { shallow } from 'zustand/shallow';

import { useCreateSecretFormState } from '~/store/store';
import { CardContainer } from '~/components/ui/containers/CardContainer';
import { IconCard } from '~/components/ui/cards/IconCard/IconCard';
import { PublicSecretModal } from '~/components/ui/modals/PublicSecretModal';

type SecretType = 'text' | 'image' | 'pdf';

interface IState {
  modalOpen: boolean;
  secretType: SecretType;
}

const SecretTypeSelector = () => {
  // State
  const { clear } = useCreateSecretFormState((state) => ({ clear: state.clear }), shallow);

  const [state, setState] = useState<IState>({
    modalOpen: false,
    secretType: 'text',
  });

  const { modalOpen, secretType } = state;


  /**
   * Handles the user action intent if a specific card was clicked
   * and ensures that the modal with the correct secret type is opened
   */
  const handleClick = (type: SecretType) => {
    if (modalOpen) {
      clear();
    }

    setState({ modalOpen: !state.modalOpen, secretType: type });
  };


  return (
    <div>
      <CardContainer>
        <IconCard
          title='Text message'
          content='Send an encrypted text'
          icon={<FileText />}
          color='blue'
          clickHandler={() => handleClick('text')}
        />

        <IconCard
          title='Image'
          content='Send an encrypted image'
          icon={<Image />}
          color='purple'
          clickHandler={() => handleClick('image')}
        />

        <IconCard
          title='PDF'
          content='Send an encrypted document'
          icon={<FileIcon />}
          color='green'
          clickHandler={() => handleClick('pdf')}
        />
      </CardContainer>

      <PublicSecretModal isOpen={modalOpen} close={handleClick} type={secretType} />
    </div>
  );
};

export { SecretTypeSelector };
