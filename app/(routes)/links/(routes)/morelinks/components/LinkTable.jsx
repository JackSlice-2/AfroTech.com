import React, { useState } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  max-width: 800px;
  border: 1px solid lightgray;
`;

const TableHeader = styled.th`
  background-color: darkblue;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: darkblue;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const LinkTable = ({ selected }) => {
  const linksByItem = {
    ReactJs: [
      { text: 'React', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
    ],
    CSS: [
      { text: 'Classic CSS', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
      { text: 'Styled Components', url: 'https://styled-components.com/docs/basics#installation' },
      { text: 'Tailwind CSS', url: 'https://CSS.com/docs' },
    ],
    TypeScript: [
      { text: 'TypeScript Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
    ],
    Databases: [
      { text: 'Supabase Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
      { text: 'Prisma Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
    ],
    Python: [
        { text: 'Pyhton3.7 Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
        { text: 'Django Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
    ],
    LinuxOS: [
       { text: 'Bash Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
    ],
  };

  const links = linksByItem[selected] || [];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Documentation Name</TableHeader>
            <TableHeader>URL to Docs</TableHeader>
          </tr>
        </thead>
        <tbody>
          {links.map((link, index) => (
            <TableRow key={index}>
              <TableCell>{link.text}</TableCell>
              <TableCell>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default LinkTable;
