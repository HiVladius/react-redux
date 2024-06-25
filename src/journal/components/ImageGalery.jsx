import { ImageList, ImageListItem } from "@mui/material";

export const ImageGalery = ({ images }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
    { Array.isArray(images) ? images.map((image) => ( // Verifica que images sea un arreglo
      <ImageListItem key={image}>
        <img
          src={`${image}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt="Imagen de la nota"
          loading="lazy"
        />
      </ImageListItem>
    )) : null}
  </ImageList>
  );
}