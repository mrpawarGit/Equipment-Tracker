export default function EquipmentTable({ data, onEdit, onDelete }) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full mt-6 border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Last Cleaned</th>
              <th className="border p-2 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((eq) => (
              <tr key={eq._id}>
                <td className="border p-2">{eq.name}</td>
                <td className="border p-2 text-center">{eq.type}</td>
                <td className="border p-2 text-center">{eq.status}</td>
                <td className="border p-2 text-center">
                  {new Date(eq.lastCleanedDate).toLocaleDateString()}
                </td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(eq)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(eq._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4 mt-6">
        {data.map((eq) => (
          <div key={eq._id} className="border rounded p-4 bg-white shadow-sm">
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-medium">Name:</span> {eq.name}
              </p>
              <p>
                <span className="font-medium">Type:</span> {eq.type}
              </p>
              <p>
                <span className="font-medium">Status:</span> {eq.status}
              </p>
              <p>
                <span className="font-medium">Last Cleaned:</span>{" "}
                {new Date(eq.lastCleanedDate).toLocaleDateString()}
              </p>
            </div>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => onEdit(eq)}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(eq._id)}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
