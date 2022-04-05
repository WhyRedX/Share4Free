import DropZoneComponent from "@components/DropZoneComponent";
import RenderFile from "@components/RenderFile";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("myFile", file)
    try {

      
      
    } catch (error) {
      
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4 text-3xl">got a file? share like it a fake news</h1>
      <div
        className="w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl jsutify-center"
        >
        <DropZoneComponent setFile={setFile} />
        {file && (
          <RenderFile
            file={{
              format: file.type.split("/")[1],
              sizeInBytes: file.size,
              name: file.name,
            }}
          />
        )}
        <button className="w-44 bg-gray-900 p-2 my-5 rounded-md focus:outline-none">
          Upload
        </button>
      </div>
    </div>
  );
}
