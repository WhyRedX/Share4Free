import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

const DropZoneComponent = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="p-4">
      <div
        {...getRootProps()}
        className="h-80 w-full rounded-md cursor-pointer focus:outline-none"
      >
        <input {...getInputProps()} />
        <div>
          {/* icon folder */}
          <p>drag n drop</p>
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;
