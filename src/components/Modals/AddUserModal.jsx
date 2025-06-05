import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function AddUserModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", role: "Learner" });

  const handleChange = (field) => (e) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSend = () => {
    if (!form.email || !form.name) return;
    onSubmit(form);
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />
      {/* modal */}
      <div className="relative bg-white w-full max-w-md mx-auto rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Invite user</h2>

        <label className="block text-sm mb-2">
          <span className="text-gray-700">Name</span>
          <input
            className="mt-1 w-full border rounded p-2"
            value={form.name}
            onChange={handleChange("name")}
          />
        </label>

        <label className="block text-sm mb-2">
          <span className="text-gray-700">Email</span>
          <input
            className="mt-1 w-full border rounded p-2"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
          />
        </label>

        <label className="block text-sm">
          <span className="text-gray-700">Role</span>
          <select
            className="mt-1 w-full border rounded p-2"
            value={form.role}
            onChange={handleChange("role")}
          >
            <option>Admin</option>
            <option>Manager</option>
            <option>Employee</option>
            <option>HR</option>
          </select>
        </label>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Send request
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
