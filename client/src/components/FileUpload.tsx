import React, { useState } from "react";

interface FileUploadProps {
  setData: React.Dispatch<React.SetStateAction<any>>;
  makeUnValid: React.Dispatch<React.SetStateAction<any>>;
}

const FileUpload: React.FC<FileUploadProps> = ({ setData, makeUnValid }) => {
  const [file, setFile] = useState();

  function handleFile(event: any) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    makeUnValid(false); // Gets rid of the results from URL submission
    setData(undefined); // Gets rid of the results from File submission
  }

  async function handleUpload(event: any) {
    event.preventDefault();
    const formData = new FormData();

    if (file) {
      formData.append("file", file);
    } else {
      alert("Please select a file");
      return;
    }

    const url = "http://127.0.0.1:8000/post_file_report";

    try {
      await fetch(url, {
        method: "POST",
        body: formData,
      });

      await fetch("http://127.0.0.1:8000/get_file_report")
        .then((response) => response.json())
        .then((result) => {
          console.log("success", result);
          setData(result["attributes"]["last_analysis_results"]);
        })
        .catch((error) => {
          console.error("Error(1): ", error);
        });
    } catch (error) {
      console.error("Error(2): ", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFile} />
        <button disabled={!file}>Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
