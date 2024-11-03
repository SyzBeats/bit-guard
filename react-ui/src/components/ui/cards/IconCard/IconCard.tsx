import React, { MouseEventHandler } from 'react';

import styles from './IconCard.module.scss';

interface CardProps {
	color: string;
	clickHandler: MouseEventHandler<HTMLDivElement>;
	icon: React.ReactNode;
	title: string;
	content: string;
}

const IconCard = (props: CardProps) => {
	const shadowClass = [styles.shadow];

	shadowClass.push(styles[props.color]);

	const cardClasses = [styles.card];

	cardClasses.push(styles[props.color]);

	return (
		<div className={styles.container} onClick={props.clickHandler}>
			<div className={cardClasses.join(' ')}>
				<div className={styles.icon}>{props.icon}</div>

				<div className={styles.content}>
					<h2>{props.title}</h2>
					<p>{props.content}</p>
				</div>
			</div>

			<div className={shadowClass.join(' ')} />
		</div>
	);
};

export { IconCard };
