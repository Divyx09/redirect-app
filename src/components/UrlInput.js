"use client";
import { useState } from "react";

export default function UrlInput() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Analyzing URL:", url);
  };

  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control'
        placeholder='Please add http:// or https://'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        aria-label='URL Input'
      />
      <div>
        <button
          className='btn btn-success mx-3'
          type='button'
          onClick={handleSubmit}
        >
          Analyze
        </button>
      </div>
    </div>
  );
}
