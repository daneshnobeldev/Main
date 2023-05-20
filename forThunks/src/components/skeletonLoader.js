import classNames from "classnames";
function SkeletonLoader({times,className}){

const OuterClassNames =classNames(

    'relative',
    'overflow-hidden',
    'bg-gray-400',
    'rounded',
    'mb-2.5',
    className


);
const innerClassNames = classNames(

    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-400',
    'via-white',
    'to-gray-400'


);

const skeleton = Array(times).fill(0).map((_,i) => {
    return <div key={i}
    className={OuterClassNames}
    >
        <div className={innerClassNames}></div>
    </div>
})

return skeleton
}

export default SkeletonLoader;