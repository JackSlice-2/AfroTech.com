import React from 'react';

interface Link {
  text: string;
  url: string;
}

interface PicturesProps {
  selected: string | null;
}

const Pictures: React.FC<PicturesProps> = ({ selected }) => {
  const linksByItem: Record<string, Link[]> = {
    "Intuitive Design": [
      { text: 'Intuitive Designs', url: './img/Explore1.png' },
    ],
    "Clean UE/UI": [
      { text: 'Interactivity', url: './img/Explore2.png' },
    ],
    Interactivity: [
      { text: 'Unique Layouts', url: './img/Explore3.png' },
    ],
    FullStack: [
      { text: 'Supabase Documentation', url: './img/Explore4.png' },
    ],
    Python: [
      { text: 'Python 3.7 Documentation', url: './img/Explore5.png' },
    ],
  };

  const images: Link[] = selected ? linksByItem[selected] || [] : [];

  return (
    <div className="flex flex-col items-center mt-10">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.text}
          style={{
            maxWidth: '100%',
            height: 'auto',
            marginBottom: '10px',
            marginRight: window.innerWidth <= 768 ? '1350px' : '755px',
            width: window.innerWidth <= 768 ? '30%' : 'auto',
          }}
        />
      ))}
    </div>
  );
};

export default Pictures;
