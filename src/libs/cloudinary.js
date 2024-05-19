import { v2 as cloudinary } from "cloudinary";
/* import { CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET } from "../config"; */

cloudinary.config({
  cloud_name: "dzcxyfd22",
  api_key: "866859882339311",
  api_secret: "hFYuImF7cM2bFzkbvrM0VM-Yz1w",
  secure: true,
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "test666",
  });
};

export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};
