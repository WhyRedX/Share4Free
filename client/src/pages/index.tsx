import DropZoneComponent from "@components/DropZoneComponent";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
     <h1 className="my-4 text-3xl">got a file? share like it a fake news</h1>
     <div className="w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl
     jsutify-center">
        <DropZoneComponent/>
     </div>
    </div>
  );
}
