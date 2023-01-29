import { useState } from 'react';
import { Image } from 'react-feather';

import styles from './Imagedropzone.module.scss';

const ImageDropZone = () => {
  // States
  const [file, setFile] = useState<File | undefined>(undefined);

  const [base64, setBase64] = useState<string | undefined>(undefined);

  // File selection handler
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      // max 1024Kbit
      if (file.size > 1024 * 1024) {
        alert('File is too big! Max 1MB');
        return;
      }

      setFile(file);

      // create Buffer from file
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        setBase64(reader.result as string);
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
        <Image size="30" />
        {file ? <p>{file.name}</p> : <p>Drop file here (Max 1024 Kb)</p>}
        <input type="file" id="file" accept="image/*" onChange={(e) => handleFile(e)} />
      </label>
    </div>
  );
};

export { ImageDropZone };
