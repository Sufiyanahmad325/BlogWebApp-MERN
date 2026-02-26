import { v2 as cloudinary } from "cloudinary"
import ApiError from "./apiError.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});




// ✅ Delete image from Cloudinary
export const deleteImageOnCloudinary = async (publicId) => {
    if (!publicId) return null;

    try {
        const result = await cloudinary.uploader.destroy(publicId);

        if (result.result !== "ok") {
            throw new ApiError(500, "Failed to delete image from Cloudinary");
        }

        return result;
    } catch (error) {
        console.error("Cloudinary delete error:", error);
        throw new ApiError(500, "Cloudinary image deletion failed");
    }
};