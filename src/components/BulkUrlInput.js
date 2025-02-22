"use client";
import { useState } from "react";

export default function BulkUrlInput() {
  const [urls, setUrls] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Analyzing URLs:", urls);
  };

  return (
    <div className='mb-3'>
      <textarea
        rows={5}
        className='p-1 w-100'
        placeholder='Please add URLs (one per line) with http:// or https://'
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      <div className='w-100 text-center my-2'>
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
