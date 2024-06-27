import { describe, expect, test } from "vitest";
import { v2 as cloudinary } from "cloudinary";

import { fileUpload } from "../../src/helpers/fileUpload";

 cloudinary.config({
  cloud_name: "dt3urmz44",
  api_key: import.meta.env.VITE_API_KEY_CLOUDINARY,
  api_secret: import.meta.env.VITE_APISECRET,
  secure: true,
});

// console.log(credenciales);

describe("Prueba de carga de archivos", () => {
  test("Debe de subir el archivo correctamente", async () => {
    const imageUrl =
      "https://www.sdpnoticias.com/resizer/v2/IXI35TPVHRAJNCM2QDAVNL4RGU.PNG?smart=true&auth=ec58a2a4775bb6e7ba54f9ca3eff21d59d309fd352425da77d44a1ddb4137b0f&width=640&height=360";

    const resp = await fetch(imageUrl);
    const blob = await resp.blob();

    const file = new File([blob], "foto.jpg");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    // Borrar imagen por ID
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    
    
    const cloudResp = await cloudinary.api.delete_resources(imageId, {
      resource_type: "image",
    });
    
  });

  test("Debe de retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });


});
