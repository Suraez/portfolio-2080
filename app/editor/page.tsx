'use client';
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("../components/editor"), { ssr: false });

const page = async() => {
  const [data, setData] = useState('');
  return (
    <div>
      <Editor value={data} onChange={setData} holder="editorjs-container" />
    </div>
  )
}

export default page;