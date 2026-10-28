import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TaskType } from "./Mainsection";

interface TasksectionProps {
  task: TaskType[];
  inprogressTask: TaskType[];
  setInprogress: Dispatch<SetStateAction<TaskType[]>>;
}

const Tasksection = ({
  task,
  inprogressTask,
  setInprogress,
}: TasksectionProps) => {
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [toast]);

  const addToStack = (item: TaskType) => {
    const alreadyAdded = inprogressTask.some(
      (t) => t.id === item.id
    );

    if (alreadyAdded) return;

    setInprogress((prev) => [...prev, item]);
    setToast(`${item.name} added successfully!`);
  };

  const removeFromStack = (item: TaskType) => {
    setInprogress((prev) =>
      prev.filter((t) => t.id !== item.id)
    );

    setToast(`${item.name} removed successfully!`);
  };

  const removeAll = () => {
    if (inprogressTask.length === 0) return;

    setInprogress([]);
    setToast("All technologies removed successfully!");
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-10">
      {/* Toast Notification */}
      {toast && (
        <div
          role="status"
          className="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-xl bg-emerald-600 px-5 py-4 text-sm font-medium text-white shadow-lg"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600">
            ✓
          </span>
          <span>{toast}</span>
        </div>
      )}

     
      <h1 className="mb-2 text-2xl sm:text-3xl font-bold text-slate-900 text-center sm:text-left">
        Explore the <span className="text-pink-500">Technologies</span>
        
      </h1>

      <p className="mb-8 text-sm sm:text-base text-slate-500 text-center sm:text-left">
        Pick one technology per category to build your ideal stack
      </p>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
       {/* Available Technologies */}
<section className="min-w-0 lg:col-span-3">
 
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {task.map((item) => {
      const isAdded = inprogressTask.some(
        (t) => t.id === item.id
      );

      return (
        <div
          key={item.id}
          className={`flex min-w-0 flex-col rounded-2xl border p-5 shadow-sm transition-colors ${
            isAdded
              ? "border-emerald-300 bg-emerald-50"
              : "border-slate-100 bg-white"
          }`}
        >
         
          <div className="mb-5 flex items-center justify-between gap-2">
            <img
              src={item.icon}
              alt={`${item.name} logo`}
              className="h-8 w-8 object-contain"
            />

            <div className="flex items-center gap-2">
              {item.badge && (
                <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs text-sky-600">
                  {item.badge}
                </span>
              )}

              <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                {isAdded && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                    ✓
                  </span>
                )}
              </span>
            </div>
          </div>

          <h3 className="mb-2 text-lg font-bold text-slate-900">
            {item.name}
          </h3>

          <p className="mb-4 flex-1 text-xs leading-[19px] text-slate-500">
            {item.description}
          </p>

          <div className="mb-3 border-t border-slate-100" />

          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
              {item.category}
            </span>

            <span className="text-slate-500">
              {item.difficulty}
            </span>

            <span className="font-medium text-slate-700">
              <span className="text-amber-400">★</span>{" "}
              {item.rating}
            </span>
          </div>

          <button
            onClick={() => addToStack(item)}
            disabled={isAdded}
            className={`w-full rounded-lg py-2.5 text-xs text-white transition ${
              isAdded
                ? "cursor-default bg-emerald-600"
                : "bg-[#0b0f1d] hover:bg-slate-800"
            }`}
          >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      );
    })}
  </div>
</section>

        {/* Your Stack */}
        <aside className="min-w-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-xl font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {inprogressTask.length === 0
              ? "No technologies selected yet."
              : `${inprogressTask.length} Technologies Selected`}
          </p>

          {inprogressTask.length === 0 ? (
            <div className="mt-5 flex min-h-[78px] items-center justify-center rounded-xl border border-dashed border-slate-200 px-3 text-center text-sm text-slate-400">
              Your stack is empty.
            </div>
          ) : (
            <>
              <div className="mt-5 flex flex-col gap-2">
                {inprogressTask.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={item.icon}
                        alt={`${item.name} logo`}
                        className="h-7 w-7 shrink-0 object-contain"
                      />

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-slate-800">
                          {item.name}
                        </h3>

                        <p className="text-[10px] text-slate-400">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromStack(item)}
                      aria-label={`Remove ${item.name}`}
                      className="shrink-0 px-1 text-2xl leading-none text-slate-400 hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={removeAll}
                className="mt-7 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                Remove All
              </button>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Tasksection;