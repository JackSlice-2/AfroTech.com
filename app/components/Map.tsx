import React from 'react';

const LocationMap:React.FC = () => (
  <div className="flex justify-center align-middle w-full h-full">
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220932.35673357724!2d-51.12221030937505!3d-30.09223667779947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1sen!2sbr!4v1691592874580!5m2!1sen!2sbr"
      allowFullScreen={true}
      loading="lazy"
      title="Location Map"
      style={{ border: '0', width: '90%', height: '70%' }}
    ></iframe>
  </div>
);

export default LocationMap;

