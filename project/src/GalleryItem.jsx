/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const GalleryItem = ({ href, src, alt }) => {
  return (
    // <a href={src}>
      <img src={src} alt={alt} border="0" loading="lazy" />
    // </a>
  );
};
