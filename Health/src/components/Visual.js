import React, { useState } from 'react';

const Visual = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    };
  
    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('file', file);
  
        // Use fetch or axios to send the file to the server
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });
  
        const data = await response.json();
        console.log('File uploaded successfully:', data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
  
    return (
      <div>
        <h2>File Upload</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
}

export default Visual