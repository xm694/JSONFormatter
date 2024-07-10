import React from "react";

export default function Editor({readOnly=false, value, onChange }) {
    return(
        <div className="editor">
            <textarea 
                readOnly={readOnly} 
                value={value}
                placeholder={readOnly ? "Your JSON will be displayed here..." : "Enter your JSON here..."}
                onChange={(event) => onChange && onChange(event.target.value)}
            />
        </div>
    );
}