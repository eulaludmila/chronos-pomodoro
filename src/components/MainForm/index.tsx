import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { Button } from '../Button';

function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <Input
          type='text'
          id='meuInput'
          labelText='Task'
          placeholder='Digite algo'
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
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
