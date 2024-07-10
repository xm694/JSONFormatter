import React, { useState } from 'react';
import './styles.css';
import Buttons from './components/Buttons.js';
import Editor from './components/Editor.js';

export default function App() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setInputText(e.target.result);
      }
      reader.readAsText(file);
    };

    const handleTextInput = (value) => {
      setInputText(value);
    };

    const handleFormat = () => {
      try{
        const parsedJson = JSON.parse(inputText);
        const formatted = JSON.stringify(parsedJson, null, 4);
        setOutputText(formatted);
      } catch (error){
        alert("Invalid JSON!");
      }
    };

    const handleMinify = () => {
      try {
        const parsedJson = JSON.parse(inputText);
        const minified = JSON.stringify(parsedJson);
        setOutputText(minified);
      } catch (error){
        alert("Invalid JSON!");
      }
    };

    const handleDownload = () => {
      const blob = new Blob([outputText], {type:"application/json"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "output.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    return (
        <div className='app'>
          <Editor value={inputText} onChange={handleTextInput}/>
          <Buttons 
            onFormat = {handleFormat}
            onMinify = {handleMinify}
            onUpload = {handleFileUpload}
            onDownload = {handleDownload}
          />
          <Editor readOnly={true} value={outputText} />
        </div>
    );
}