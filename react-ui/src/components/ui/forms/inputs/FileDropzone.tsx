import { useState } from 'react';
import { File } from 'react-feather';

import styles from './FileDropzone.module.scss';

interface IProps {
  handleContent: (content: string) => void;
  handleExtension: (extension: string) => void;
}

const FileDropzone = (props: IProps) => {
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

  // Content - allow only PDF for the moment
  return (
    <div className={classes.join(' ')}>
      <label>
        <div className={styles.labelText}>
          <File size="30" />
          {file ? <p>{file.name}</p> : <p>Select a document (Max 512 Kb)</p>}
        </div>
        <input type="file" onChange={handleFile} accept="application/pdf" />
      </label>
    </div>
  );
};

export { FileDropzone };
