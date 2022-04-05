import { useDropzone } from "react-dropzone";
import { Dispatch, FunctionComponent, useCallback } from "react";

const DropZoneComponent: FunctionComponent<{setFile:Dispatch<any>}> = ({setFile}) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "image/png, audio/mp3",
    });

  return (
    <div className="p-4 w-full">
      <div
        {...getRootProps()}
        className="h-80 w-full rounded-md cursor-pointer focus:outline-none"
      >
        <input {...getInputProps()} />
        <div className={
          "flex flex-col items-center justify-center border-2 border-dashed border-yellow-light rounded-xl h-full space-y-3"
          +
          (isDragReject === true ? " border-red-500" : "")
          +
          (isDragAccept === true ? " border-green-500" : "")
          }>
          {/* icon folder */}
          {isDragReject ? (
            <p>Sorry its doesn't accept this file</p>
          ) : (
            <>
              <p>drag n drop</p>
              <p className="mt-2 text-base text-gray-300">
                only png, jpg, mp3 file supported
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;
