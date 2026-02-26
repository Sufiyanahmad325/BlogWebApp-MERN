// import { v2 as cloudinary } from 'cloudinary'
// import fs from 'fs'

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });



// const uploadCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;

//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: 'auto'
//     });

//     console.log("✅ File is uploaded on Cloudinary:", response.url);
//     fs.unlinkSync(localFilePath);
//     return response;

//   } catch (error) {
//     console.error("❌ Upload failed:", error.message);
//     if (fs.existsSync(localFilePath)) {
//       fs.unlinkSync(localFilePath);
//     }
//     return null;
//   }
// };


 

import { v2 as cloudinary } from "cloudinary"
import fs from 'fs'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return;
    // upload the file on cloudinary 
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // ye pata krega ki file jo aarahi hai wo img hai ya video etc 
    });
    // file has been uploaded succesfully
    console.log("file is uploaded on cloudinary", response.url);
    await fs.promises.unlink(localFilePath); // delete local file after upload
    return response;
  } catch (error) {
    console.log("file upload on cloudinary failed", error.message);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // remove only if file exists
    }
    return null;
  }
};

export default uploadOnCloudinary;
