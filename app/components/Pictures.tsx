import React from 'react';
import styled from 'styled-components';

interface Link {
  text: string;
  url: string;
}

interface PicturesProps {
  selected: string | null;
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
  margin-bottom: 10px;
  margin-right: 755px;

  @media only screen and (max-width: 768px) {
    margin-right: 1000px;
    width: 37%;  
  }
`;

const Pictures: React.FC<PicturesProps> = ({ selected }) => {
  const linksByItem: Record<string, Link[]> = {
    FrontEnd: [
      { text: 'React', url: './img/place4.png' },
    ],
    BackEnd: [
      { text: 'Classic BackEnd', url: './img/place1.png' },
    ],
    Design: [
      { text: 'Design', url: './img/place2.png' },
    ],
    FullStack: [
      { text: 'Supabase Documentation', url: './img/place3.png' },
    ],
    Python: [
      { text: 'Python 3.7 Documentation', url: './img/place4.png' },
    ],
  };

  const images: Link[] = selected ? linksByItem[selected] || [] : [];

  return (
    <ImageContainer>
      {images.map((image, index) => (
        <Image key={index} src={image.url} alt={image.text} />
      ))}
    </ImageContainer>
  );
};

export default Pictures;
