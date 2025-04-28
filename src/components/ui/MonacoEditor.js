import React from "react";
import MonacoEditor from "@monaco-editor/react";

const MonacoEditorComponent = ({ language, value, onChange, height }) => {
  return (
    <MonacoEditor
      height={height}
      language={language}
      value={value}
      onChange={onChange}
      theme="vs-light"
    />
  );
};

export default MonacoEditorComponent;
