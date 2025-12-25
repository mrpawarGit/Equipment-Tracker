import { useEffect, useState } from "react";
import axios from "axios";
import EquipmentPage from "./pages/EquipmentPage";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  // loading || ready || error
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

        await axios.get(`${baseUrl}/health`);

        setStatus("ready");
      } catch (err) {
        setStatus("error");
      }
    };

    checkBackend();
  }, []);

  if (status !== "ready") {
    return <LoadingScreen error={status === "error"} />;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <EquipmentPage />
    </div>
  );
}

export default App;
