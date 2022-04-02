import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();
const storage = multer.diskStorage({});

let upload = multer({ storage: storage });

router.post("/upload", upload.single("myFile"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    console.log(req.file);
    
      let uploadedFile: UploadApiResponse;
      try {
        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
          folder: "Share4Free",
          resource_type: "auto",
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Cloudinary Error" });
      }

    const {originalname} = req.file;
    const { secure_url, bytes, format } = uploadedFile; 
    const file = await File.create({
      filename : originalname,
      sizeInBytes : bytes,
      secure_url,
      format,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
