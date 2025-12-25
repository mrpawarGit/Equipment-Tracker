import { useEffect, useState } from "react";

const initialState = {
  name: "",
  type: "Machine",
  status: "Active",
  lastCleanedDate: "",
};

export default function EquipmentForm({ onSubmit, selected }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selected) {
      setForm(selected);
      setError("");
    }
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.lastCleanedDate) {
      setError("All fields are required");
      return;
    }

    onSubmit(form);
    setForm(initialState);
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-3"
    >
      <input
        name="name"
        placeholder="Equipment Name"
        className="border p-2 w-full"
        value={form.name}
        onChange={handleChange}
      />

      <select
        name="type"
        className="border p-2 w-full"
        value={form.type}
        onChange={handleChange}
      >
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select
        name="status"
        className="border p-2 w-full"
        value={form.status}
        onChange={handleChange}
      >
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        name="lastCleanedDate"
        className="border p-2 w-full"
        value={form.lastCleanedDate?.slice(0, 10)}
        onChange={handleChange}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        {selected ? "Update" : "Add"} Equipment
      </button>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
    </form>
  );
}
