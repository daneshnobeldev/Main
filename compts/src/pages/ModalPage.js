import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage(){

    const [isOpen , setIsOpen] = useState(false);
    const handleClick = () => {
        console.log('Opened Modal!');
        setIsOpen(true);

    }
    const handleChange = (isOpen) => {
        setIsOpen(isOpen);
    }
    return <div className='px-5'>
        <Button onClick={handleClick} primary rounded>Open Modal</Button>
        {isOpen && <Modal open={isOpen} onChange={handleChange}/>}
    </div>
}

export default ModalPage