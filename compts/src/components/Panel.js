import classNames from "classnames";
function Panel({children,className,...rest}){

    const concatenatedNames = classNames(
        " justify-content items-center border rounded cursor-pointer shadow px-3 py-1 ",
        className
    );
    return(
        <div {...rest} className={concatenatedNames}>
            {children}
        </div>
    )
}

export default Panel;