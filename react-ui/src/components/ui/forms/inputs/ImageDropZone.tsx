import { useState } from 'react';
import { Image } from 'react-feather';

import styles from './Imagedropzone.module.scss';

const ImageDropZone = () => {
  // States
  const [file, setFile] = useState<File | undefined>(undefined);

  const [selected, setSelected] = useState(false);

  // File selection handler
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFile(files[0]);
      setSelected(true);
    }
  };

  // Class definitions
  const classes = [styles.dropzone];

  if (selected) {
    classes.push(styles.selected);
  }

  // Content
  return (
    <div className={classes.join(' ')}>
      <label>
        <Image size="30" />
        {file && <p>{file.name}</p>}
        <input type="file" id="file" accept="image/*" onChange={(e) => handleFile(e)} />
      </label>
    </div>
  );
};

export { ImageDropZone };
