
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";
import type { TaskType } from "./components/Mainsection";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const taskpromise: Promise<TaskType[]> = fetch("/data.json").then(
  (res) => {
    if (!res.ok) {
      throw new Error("Failed to load data.json");
    }

    return res.json() as Promise<TaskType[]>;
  }
);

function App() {
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="py-10 text-center">
            Loading technologies...
          </div>
        }
      >
        <Mainsection taskpromise={taskpromise} />
      </Suspense>

      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
