import { useRef } from "react";
import EmptyState from "./EmptyState";

interface Props {
  setFile: (file: any) => void;
}

export default function Card({  setFile }: Props) {
  const fileInput = useRef(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white shadow w-[402px]">
        <div className="px-4 py-5 sm:p-6 flex items-center justify-center">
          <p className="font-['Poppins'] text-[#4F4F4F] font-medium text-lg leading-[27px]">
            Upload your image
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-['Poppins'] text-[#828282] font-[500] text-[10px]">
            File should Jpeg, Png,...
          </p>
        </div>
        <div className="flex items-center justify-center m-[15px]">
          <EmptyState />
        </div>
        <div className="sm:pt-6 flex items-center justify-center">
          <p className="font-['Poppins'] text-[#4F4F4F] text-[12px] text-[#BDBDBD]">
            Or
          </p>
        </div>
        <div className="pb-[10px] sm:p-6 flex items-center justify-center">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              if (fileInput.current != null) fileInput.current.click();
            }}
          >
            Choose a file
          </button>
        </div>
        <input
          type="file"
          className="hidden"
          onChange={(e) => handleFileChange(e)}
          ref={fileInput}
          accept=".png,.jpg,.jpeg,.svg"
        />
      </div>
    </>
  );
}
