export const fileUpload = async ( file ) => {
  if (!file) throw new Error("No se ha seleccionado un archivo");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dt3urmz44/upload";

  const formData = new FormData();
  formData.append("upload_preset", "upload-react");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};


// try {
//   const resp = await fetch(cloudUrl, {
//     method: "POST",
//     body: formData,
//   });


//   if (!resp.ok) throw new Error("Error al cargar la imagen 1");

//   const cloudResp = await resp.json();


//   return cloudResp.secure_url;
// } catch (error) {
//   console.log(error);
//   throw new Error("Error al cargar la imagen 2" + error.message);
// }
// };
