import { useState } from "react";
import Card from "../components/Card";
import { useUploadForm } from "../hooks";

export default function Home() {
  const [file, setFile] = useState(null);
  const { isSuccess, uploadForm, progress, response } = useUploadForm(
    "https://imageuploader-backend-production.up.railway.app/api/upload"
  );

  const isThereFile = () => {
    if (isSuccess)
      return (
        <>
          <Card isSuccessComponent={true} responseData={response.data}/>
        </>
      );

    if (file) {
      return <Card isProgressComponent={true} value={progress} />;
    }

    if (!file) {
      return <Card setFile={setFile} uploadForm={uploadForm} />;
    }
  };

  return isThereFile();
}
