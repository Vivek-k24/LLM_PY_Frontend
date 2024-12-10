import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/upload/", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Failed to upload file.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload Your File</h1>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload</button>
      </header>
    </div>
  );
}

export default App;
