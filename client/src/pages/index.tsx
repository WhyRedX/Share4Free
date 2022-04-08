import DownloadFile from "@components/DownloadFile";
import DropZoneComponent from "@components/DropZoneComponent";
import RenderFile from "@components/RenderFile";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [id, setId] = useState(null);
  const [downloadPageLink, setDownloadPageLink] = useState(null);
  const [uploadState, setUploadState] = useState<
    "Uploading" | "Upload Failed" | "Uploaded" | "Upload"
  >("Upload");

  const handleUpload = async () => {
    if (uploadState === "Uploading") return;
    setUploadState("Uploading");

    const formData = new FormData();
    formData.append("myFile", file);
    try {
      const { data } = await axios({
        method: "post",
        data: formData,
        url: "api/files/upload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setDownloadPageLink(data.downloadPageLink);
      setId(data.id);
    } catch (error) {
      console.log(error.response.data);
      setUploadState("Upload Failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4 text-3xl">Got a file? share like it a fake news</h1>
      <div className="w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl jsutify-center">
        {!downloadPageLink && <DropZoneComponent setFile={setFile} />}
        {file && (
          <RenderFile
            file={{
              format: file.type.split("/")[1],
              sizeInBytes: file.size,
              name: file.name,
            }}
          />
        )}
        {!downloadPageLink && (
          <button
            className="w-44 bg-gray-900 p-2 my-5 rounded-md focus:outline-none"
            onClick={handleUpload}
          >
            {uploadState}
          </button>
        )}
        {downloadPageLink && (
          <DownloadFile downloadPageLink={downloadPageLink} />
        )}
      </div>
    </div>
  );
}
