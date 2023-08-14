import { useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [file, setFile] = useState(null);

  const isThereFile = () => {
    if (file) {
      return <h1>Test</h1>
    } else {
      return <Card file={file} setFile={setFile} />
    }
  };

  return isThereFile();
}
