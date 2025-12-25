import { useEffect, useState } from "react";
import EquipmentForm from "../components/EquipmentForm";
import EquipmentTable from "../components/EquipmentTable";
import {
  getEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} from "../services/equipmentApi";

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState([]);
  const [selected, setSelected] = useState(null);

  // States for search, filter & sort
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortKey, setSortKey] = useState("");

  const loadEquipment = async () => {
    const data = await getEquipment();
    setEquipment(data);
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const handleSubmit = async (form) => {
    if (selected) {
      await updateEquipment(selected._id, form);
      setSelected(null);
    } else {
      await createEquipment(form);
    }
    loadEquipment();
  };

  const handleDelete = async (id) => {
    await deleteEquipment(id);
    loadEquipment();
  };

  // Filter, Search & Sort
  const filteredEquipment = equipment
    .filter((eq) => eq.name.toLowerCase().includes(search.toLowerCase()))
    .filter((eq) => (typeFilter === "All" ? true : eq.type === typeFilter))
    .filter((eq) =>
      statusFilter === "All" ? true : eq.status === statusFilter
    )
    .sort((a, b) => {
      if (sortKey === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortKey === "date") {
        return new Date(b.lastCleanedDate) - new Date(a.lastCleanedDate);
      }
      return 0;
    });

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Equipment Tracker</h1>

      <EquipmentForm onSubmit={handleSubmit} selected={selected} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option>All</option>
          <option>Machine</option>
          <option>Vessel</option>
          <option>Tank</option>
          <option>Mixer</option>
        </select>

        <select
          className="border p-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Under Maintenance</option>
        </select>

        <select
          className="border p-2"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name (A–Z)</option>
          <option value="date">Last Cleaned (Newest)</option>
        </select>
      </div>

      <div className="overflow-x-auto mt-6">
        <EquipmentTable
          data={filteredEquipment}
          onEdit={setSelected}
          onDelete={handleDelete}
        />
      </div>

      {filteredEquipment.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Not found</p>
      )}
    </div>
  );
}
