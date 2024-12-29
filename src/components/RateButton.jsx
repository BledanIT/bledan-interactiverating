

const RateButton = ({value, isSelected, onSelect}) => {

    const commonStyle = 'rounded-full text-center content-center font-bold';
    const activeStyle = isSelected ? 'bg-textMain text-bgSecondary' : 'bg-bgSecondary text-textSecondary';

    return (
        <>
            {value ? 
                (<button onClick = {onSelect} className = {`${commonStyle} ${activeStyle} size-14 hover:bg-highlight hover:text-bgSecondary ease-linear duration-150`}>{value}</button>)
                :
                (<div className = {`${commonStyle} ${activeStyle} size-12`}><i className = 'iconStar align-middle'></i></div>)
            }
        </>
    )
}

export default RateButton