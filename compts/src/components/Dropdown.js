import { useState,useRef,useEffect } from 'react';
import Panel from './Panel';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Dropdown({ value, onChange, options }) {

    const [isOpen, setIsOpen] = useState(false);
    const ddl = useRef();

    useEffect(()=>{

        const handleOutsideClick = (event) => {
            if(!ddl.current){
                return;
            }
            if(!ddl.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener("click",handleOutsideClick,true);

        return () => {
            document.removeEventListener("click",handleOutsideClick);
        }
    },[])

    const handleClick = () => {
        setIsOpen((current) => {
            return !current;
        });
    }

    const handleChange = (option) => {
        
        setIsOpen(false);
        onChange(option);

    }

    const renderedOptions = options.map((option) => {
        return <div className='hover:bg-sky-300'
            key={option.value}
            onClick={() => {
                handleChange(option)
            }}
        >
            {option.label}
        </div>
    });

   

    return (
        <div ref={ddl} className='w-48 relative'>
            <Panel onClick={handleClick} className="flex justify-between">
                <div >{value?.label || "Select..."}</div>
                {isOpen ? <GoChevronLeft /> : <GoChevronDown />}
            </Panel>
            {isOpen && <Panel className="absolute top-full"> {renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown;