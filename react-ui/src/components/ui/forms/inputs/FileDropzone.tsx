import React, { useState } from 'react';

import styles from './FileDropzone.module.scss';

import { FileIcon } from '~/components/icons/Icons';


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
			const currentFile = e.target.files[0];

			// max 1024KBit
			if (currentFile.size > 512 * 1024) {
				alert('File is too big! Max 512 Kb');

				return;
			}

			setFile(currentFile);

			// create Buffer from file
			const reader = new FileReader();
			reader.readAsDataURL(currentFile);

			reader.onload = () => {
				props.handleContent(reader.result as string);
				props.handleExtension(currentFile.type.split('/')[1]);
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
					<FileIcon size='30' />
					{file ? <p>{file.name}</p> : <p>Select a document (Max 512 Kb)</p>}
				</div>

				<input type='file' onChange={handleFile} accept='application/pdf' />
			</label>
		</div>
	);
};

export { FileDropzone };
