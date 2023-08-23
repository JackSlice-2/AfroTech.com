import React from 'react';
import styled from 'styled-components';

interface Link {
  text: string;
  url: string;
}

interface LinkTableProps {
  selected: string | null;
}

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

const LinkTable: React.FC<LinkTableProps> = ({ selected }) => {
  const linksByItem: Record<string, Link[]> = {
    ReactJs: [
      { text: 'React', url: 'https://reactjs.org/docs/getting-started.html' },
      { text: 'NextJs', url: 'https://nextjs.org/docs' },
      { text: 'Tailwind UI', url: 'https://tailwindui.com/documentation' },
      { text: 'Shadcn/ui', url: 'https://ui.shadcn.com/' },
      { text: 'Lucide', url: 'https://lucide.dev/' },
      { text: 'React Native', url: 'https://reactnative.dev/docs/environment-setup' },
      { text: 'Material UI', url: 'https://mui.com/' },
      { text: 'Flowbite', url: 'https://flowbite.com/docs/getting-started/next-js/' },
    ],
    CSS: [
      { text: 'Classic CSS', url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
      { text: 'Styled Components', url: 'https://styled-components.com/docs/basics#installation' },
      { text: 'Tailwind CSS', url: 'https://v1.tailwindcss.com/docs/installation' },
      { text: 'Bootstrap', url: 'https://getbootstrap.com/' },
    ],
    JavaScript: [
      { text: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { text: 'TypeScript', url: 'https://www.typescriptlang.org/docs/' },
      { text: 'NodeJs', url: 'https://docs.djangoproject.com/en/3.2/' },
      { text: 'NPM', url: 'https://docs.djangoproject.com/en/3.2/' },
      { text: 'NVM', url: 'https://docs.djangoproject.com/en/3.2/' },
    ],
    Databases: [
      { text: 'Supabase', url: 'https://supabase.com/' },
      { text: 'Prisma DB', url: 'https://docs.djangoproject.com/en/3.2/' },
      { text: 'PlanetScale', url: 'https://planetscale.com/' },
    ],
    Python: [
        { text: 'Pyhton3.7 Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
        { text: 'Django Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
    ],
    LinuxOS: [
       { text: 'Linux Mint Commands', url: 'https://community.linuxmint.com/tutorial/view/244' },
       { text: 'Bash Refrence Manual', url: 'https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html' },
       { text: 'Kali Linux Documentation', url: 'https://www.kali.org/docs/' },
    ],
  };

  const links: Link[] = selected ? linksByItem[selected] || [] : [];

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