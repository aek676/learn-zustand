import { useShallow } from 'zustand/shallow';
import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';

export const JiraPage = () => {
  const pending = useTaskStore(useShallow((s) => s.getTasksByStatus('open')));
  const inProgress = useTaskStore(useShallow((s) => s.getTasksByStatus('in-progress')));
  const done = useTaskStore(useShallow((s) => s.getTasksByStatus('done')));
  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <JiraTasks title='Pendientes' tasks={pending} status='open' />

        <JiraTasks title='Avanzando' tasks={inProgress} status='in-progress' />

        <JiraTasks title='Terminadas' tasks={done} status='done' />

      </div>
    </>
  );
};