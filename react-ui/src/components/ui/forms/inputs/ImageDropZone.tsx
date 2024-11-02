import { useState } from 'react';

import styles from './Imagedropzone.module.scss';

import { Image } from '~/components/icons/Icons';

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
			const selectedFile = e.target.files[0];
			// max 1024Kbit
			if (selectedFile.size > 512 * 1024) {
				alert('File is too big! Max 512 Kb');

				return;
			}

			setFile(selectedFile);

			// create Buffer from file
			const reader = new FileReader();
			reader.readAsDataURL(selectedFile);

			reader.onload = () => {
				props.handleContent(reader.result as string);
				props.handleExtension(selectedFile.type.split('/')[1]);
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
					<Image size='30' />
					{file ? <p>{file.name}</p> : <p>Select an image (Max 512 Kb)</p>}
				</div>
				<input type='file' id='file' accept='image/*' onChange={(e) => handleFile(e)} />
			</label>
		</div>
	);
};

export { ImageDropZone };
