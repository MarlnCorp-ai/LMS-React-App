import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button"; 


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Python Lab</h1>
      <Button className="bg-blue-500" onClick={() => navigate("/lab")}>
        Go to Lab
      </Button>
    </div>
  );
}
