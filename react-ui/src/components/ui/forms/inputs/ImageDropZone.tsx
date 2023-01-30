import { useState } from 'react';
import { Image } from 'react-feather';

import styles from './Imagedropzone.module.scss';

interface IProps {
  handleContent: (content: string) => void;
  handleExtension: (extension: string) => void;
}

const ImageDropZone = (props: IProps) => {
  // States
  const [file, setFile] = useState<File | undefined>(undefined);

  // File selection handler
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      // max 1024Kbit
      if (file.size > 512 * 1024) {
        alert('File is too big! Max 512 Kb');
        return;
      }

      setFile(file);

      // create Buffer from file
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        props.handleContent(reader.result as string);
        props.handleExtension(file.type.split('/')[1]);
      };
    }
  };

  // Class definitions
  const classes = [styles.dropzone];

  if (file) {
    classes.push(styles.selected);
  }

  // Content
  return (
    <div className={classes.join(' ')}>
      <label>
        <div className={styles.labelText}>
          <Image size="30" />
          {file ? <p>{file.name}</p> : <p>Select an image (Max 512 Kb)</p>}
        </div>
        <input type="file" id="file" accept="image/*" onChange={(e) => handleFile(e)} />
      </label>
    </div>
  );
};

export { ImageDropZone };
