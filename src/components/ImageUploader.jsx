
import  { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import  iconoDescarga from '/iconoDescarga.svg';

const ImageUploader=()=> {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Acepta solo la primera imagen si se arrastran múltiples archivos
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', // Aceptar solo archivos de imagen
  });

  return (
    <div className='bg-fcf2ff flex items-center justify-center'>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <iconoDescarga/>
        <p >Arrastra una imagen aquí o haz clic para seleccionar una.</p>
      </div>
      {image && <img src={image} alt="Imagen cargada" />}
    </div>
  );
}

export default ImageUploader;
