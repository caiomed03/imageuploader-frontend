import { useState } from "react";
import axios from "axios";

export const useUploadForm = (url: string) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [response, setResponse] = useState<any>(null);

  const uploadForm = async (formData: FormData) => {
    // setIsLoading(true);
    setResponse(
      await axios.post(url, formData, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryEI0Lym6LHE88DCvq",
        },
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 50;
          setProgress(progress);
        },
        onDownloadProgress: (progressEvent) => {
          const progress =
            50 + (progressEvent.loaded / progressEvent.total) * 50;
          console.log(progress);
          setProgress(progress);
        },
      })
    );
    setIsSuccess(true);
  };

  return { uploadForm, isSuccess, progress, response };
};
