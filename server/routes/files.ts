import express from "express";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({});

let upload = multer({ storage: storage });

router.post("/upload", upload.single("myFile"), (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    console.log(req.file);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
