import { ToastContainer } from "react-toastify";
import Control from "./components/conntrol/Conntrol";

function App() {
  return (
    <main className="min-h-screen bg-black text-slate-100">
      <Control />
      <ToastContainer />
    </main>
  );
}

export default App;
