
import { Suspense } from "react";
import Navber from "./components/Navber";
import Mainsection from "./components/Mainsection";
import type { TaskType } from "./components/Mainsection";

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
      <Navber />

      <Suspense
        fallback={
          <div className="py-10 text-center">
            Loading technologies...
          </div>
        }
      >
        <Mainsection taskpromise={taskpromise} />
      </Suspense>
    </>
  );
}

export default App;
