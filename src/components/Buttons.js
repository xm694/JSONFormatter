import React, {useRef} from "react";

export default function Buttons({ onFormat, onMinify, onUpload, onDownload }) {
    const fileInputRef = useRef(null);

    return (
        <div className="buttons">
            <input type="file" 
                ref = {fileInputRef}
                style={{display:'none'}} 
                onChange={onUpload} 
                accept=".json, .txt"/>
            <button onClick={()=> fileInputRef.current.click()}>Upload File</button>
            <button onClick={onFormat}>Format</button>
            <button onClick={onMinify}>Minify</button>
            <button onClick={onDownload}>Download File</button>
        </div>
    );
}