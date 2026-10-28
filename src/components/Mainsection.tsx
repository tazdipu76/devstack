
import { use, useState } from "react";
import Banner from "./Banner";
import Tasksection from "./Tasksection";

export interface TaskType {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  difficulty: string;
  rating: number;
  badge: string | null;
}

interface MainsectionProps {
  taskpromise: Promise<TaskType[]>;
}

const Mainsection = ({ taskpromise }: MainsectionProps) => {
  const data = use(taskpromise);

  const [task] = useState<TaskType[]>(data);
  const [inprogressTask, setInprogress] = useState<TaskType[]>([]);

  return (
    <div>
      <Banner />

      <Tasksection
        task={task}
        inprogressTask={inprogressTask}
        setInprogress={setInprogress}
      />
    </div>
  );
};

export default Mainsection;
