import Accordion from "../components/Accordion";

function AccordionPage(){
    const items = [
        {
            id: 1, label: 'How HTML works in React',
            content: 'Html can be used in React in many ways'
        },
        {
            id: 2, label: 'How JavaScpt works in React',
            content: 'JavaScpt can be used in React in many ways'
        },
        {
            id: 3, label: 'How Css works in React',
            content: 'Css can be used in React in many ways'
        }

    ];
    return(
        <Accordion items={items} />
    )
}

export default AccordionPage;