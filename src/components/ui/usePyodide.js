import { useEffect, useState } from "react";

export default function usePyodide() {
  const [pyodide, setPyodide] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPyodideAndPackages() {
      setLoading(true);
      const pyodide = await window.loadPyodide();
      setPyodide(pyodide);
      setLoading(false);
    }

    loadPyodideAndPackages();
  }, []);

  const runPythonCode = async (code) => {
    if (!pyodide) return "Pyodide not loaded yet.";
    try {
      const result = await pyodide.runPythonAsync(code);
      return result;
    } catch (err) {
      return `Error: ${err.message}`;
    }
  };

  return { runPythonCode, loading };
}
