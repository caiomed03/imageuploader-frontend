import { useRef } from "react";
import EmptyState from "./EmptyState";
import ProgressBar from "./ProgressBar";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { FileUploader } from "react-drag-drop-files";

interface Props {
  setFile?: (file: any) => void;
  isProgressComponent?: boolean;
  isSuccessComponent?: boolean;
  uploadForm?: any;
  value?: any;
  responseData?: any;
}

export default function Card({
  setFile = () => {},
  isProgressComponent = false,
  isSuccessComponent = false,
  uploadForm = null,
  value,
  responseData,
}: Props) {
  const fileInput = useRef(null);
  const linkText = useRef(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const formData = new FormData();
      formData.append("image", file);
      uploadForm(formData);
    }
  };

  const handleDragDrop = (file: any) => {
    setFile(file);
    const formData = new FormData();
    formData.append("image", file);
    uploadForm(formData);
  };

  const handleAction = () => {
    if (isProgressComponent) {
      return (
        <>
          <div className="px-4 py-5 sm:p-6">
            <p className="font-['Poppins'] text-[#4F4F4F] font-medium text-lg leading-[27px]">
              Uploading...
            </p>
          </div>
          <div className="pb-[10px] flex items-center justify-center">
            <ProgressBar value={value} />
          </div>
        </>
      );
    }

    if (isSuccessComponent) {
      return (
        <>
          <div className="px-4 py-5 sm:p-6 flex flex-col items-center justify-center">
            <CheckCircleIcon color="green" width={50} height={50} />
            <p className="font-['Poppins'] text-[#4F4F4F] font-medium text-lg leading-[27px] pt-[12px]">
              Uploaded Succesfully!
            </p>
          </div>
          <div className="flex items-center justify-center mx-[12px] my-[5px]">
            <img src={responseData.url} />
          </div>
          <div>
            <div className="m-2">
              <div className="flex flex-row bg-[#F6F8FB] rounded-[8px] border-[#E0E0E0] border-[1px] pl-[10px] items-center justify-evenly">
                <p
                  className="font-['Poppins'] text-[#4F4F4F] text-[8px] leading-[12px] tracking-[-3.5%]"
                  ref={linkText}
                >
                  {responseData.url}
                </p>
                <button
                  type="button"
                  className="rounded-[8px] bg-[#2F80ED] px-5 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() =>
                    navigator.clipboard.writeText(linkText.current.innerHTML)
                  }
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (!isProgressComponent && !isSuccessComponent) {
      return (
        <>
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
            <FileUploader handleChange={handleDragDrop} name="file">
              <EmptyState
                onClick={() => {
                  if (fileInput.current != null) fileInput.current.click();
                }}
              />
            </FileUploader>
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
        </>
      );
    }
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow w-[402px]">
      {handleAction()}
    </div>
  );
}
