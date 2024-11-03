import React, { useState, useMemo, useImperativeHandle, forwardRef } from 'react';
import styled from 'styled-components';

import Checkbox from '~/components/ui/checkbox/Checkbox';
import { TableRow } from '~/types/types-components';


interface ListProps {
	headers: string[];
	rows: TableRow[];
	selectable?: boolean;
	onRowClick?: (row: TableRow) => void;
	pageSize?: number;
}

const List = forwardRef(({ headers, rows, selectable, onRowClick, pageSize = 5 }: ListProps, ref) => {
	// State
	const [selectedRows, setSelectedRows] = useState<Record<number, boolean>>({});
	const [currentPage, setCurrentPage] = useState(1);


	// Hooks
	useImperativeHandle(ref, () => ({
		getSelected: () => rows.filter((_, index) => selectedRows[index]),
	}));


	// Handlers
	const handleRowClick = (rowIndex: number) => {
		if (selectable) {
			setSelectedRows((prev) => ({ ...prev, [rowIndex]: !prev[rowIndex] }));
		}

		onRowClick?.(rows[rowIndex]);
	};


	const handleToggleSelectAll = () => {
		if (Object.keys(selectedRows).length) {
			setSelectedRows({});
		} else {
			const allSelected = rows.reduce((acc, _, index) => ({ ...acc, [index]: true }), {});
			setSelectedRows(allSelected);
		}
	};


	// Determine pagination
	const paginatedRows = useMemo(() => {
		const start = (currentPage - 1) * pageSize;

		return rows.slice(start, start + pageSize);
	}, [rows, currentPage, pageSize]);


	// Determine content
	return (
		<Container>
			<TableWrapper>
				<Table>
					<thead>
					<tr>
						{selectable && (
							<Th>
								<Checkbox
									checked={Object.keys(selectedRows).length > 0}
									onChange={handleToggleSelectAll}
								/>
							</Th>
						)}

						{headers.map((header, i) => (
							<Th key={i}>{header}</Th>
						))}
					</tr>
					</thead>

					<tbody>
					{paginatedRows.map((row, rowIndex) => (
						<Row
							key={rowIndex}
							onClick={() => handleRowClick(rowIndex)}
							selected={selectedRows[rowIndex]}
						>
							{selectable && (
								<Td>
									<Checkbox
										checked={selectedRows[rowIndex]}
										onChange={() => handleRowClick(rowIndex)}
									/>
								</Td>
							)}

							{row.content.map((cell, i) => (
								<Td key={i}>{cell}</Td>
							))}
						</Row>
					))}
					</tbody>
				</Table>
			</TableWrapper>

			<Pagination>
				{Array.from({ length: Math.ceil(rows.length / pageSize) }, (_, i) => (
					<PageButton
						key={i}
						onClick={() => setCurrentPage(i + 1)}
						active={currentPage === i + 1}
					>
						{i + 1}
					</PageButton>
				))}
			</Pagination>
		</Container>
	);
});

// --- Styled components ---

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 100%;
  overflow: auto;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: ${({ theme }) => theme.colors.white_800};
    color: ${({ theme }) => theme.colors.blue_dark};
  }
`;

const Th = styled.th`
  text-align: left;
  font-weight: 500;
  padding: 1.25rem 1rem;


  &:first-child {
    width: 4rem;
  }
`;

const Td = styled.td`
  padding: 1.25rem 1rem;
`;

const Row = styled.tr<{ selected: boolean }>`
  color: ${({ selected, theme }) => (selected ? theme.colors.iceblue : 'inherit')};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    background-color: #f2f2f2
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;


const PageButton = styled.button<{ active: boolean }>`
  background-color: ${({ theme, active }) => (active ? theme.colors.blue_dark : theme.colors.iceblue_500)};
  color: ${({ theme, active }) => (active ? theme.colors.iceblue : theme.colors.blue_dark)};
  border: 1px solid ${({ theme }) => theme.colors.blue_dark};
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme, active }) => (active ? theme.colors.blue_dark : theme.colors.blue_dark)};
    color: ${({ theme }) => (theme.colors.iceblue)};
  }
`;

export default List;
