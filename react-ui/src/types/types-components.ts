interface PropsChildren {
	children: React.ReactNode;
}

interface AvatarType {
	src: string;
	alt: string;
}

// Define the type for a single row
interface TableRow {
	content: (string | JSX.Element)[];
	meta: {
		id: string;
	};
}

export type { PropsChildren, AvatarType, TableRow };
