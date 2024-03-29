import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500, maxWidth: 800 }} cols={4} rowHeight={200}>
      {
        images
          ? images.map((image) => (
            <ImageListItem key={image}>
              <img
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={'Imagen de nota'}
                loading="lazy"
              />
            </ImageListItem>
          ))
          : ''
      }
    </ImageList>
  );
};
