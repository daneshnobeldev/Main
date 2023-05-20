import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ open,onChange }) {
    const modalRef = useRef();
    const [isOpen, setIsOpen] = useState(open);
    useEffect(() => {
        const handleClick = (event) => {
            ;
            const modalBg = document.querySelector('.modal-container .modal-bg');
            if (modalBg && modalBg.contains(event.target)) {
                setIsOpen(false);
                onChange(false);
            }
        }
        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [])
    const renderedModal =  <div ref={modalRef}  className={isOpen?'block':'hidden'}>
        <div className="modal-bg absolute inset-0 bg-gray-300 opacity-80">
        </div>
        <div className="absolute inset-40 bg-white p-10 flex items-center justify-content margin-0 ">
            <span className="inset-0 basis-full text-center">Modal!!!</span>
        </div>
    </div>


    return createPortal(renderedModal, document.querySelector('.modal-container'))

}

export default Modal;