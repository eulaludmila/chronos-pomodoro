import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { Button } from '../Button';
import { useRef } from 'react';

function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <Input
          type='text'
          id='meuInput'
          labelText='Task'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>
      <div className='formRow'>
        <p>Próximo intervalo é de 25 min</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <Button icon={<PlayCircleIcon size={'3.2rem'} />} />
      </div>
    </form>
  );
}

export default MainForm;
