

const TextContent = ({isSent}) => {
    return (
        <div className = {`${isSent && 'text-center'}`}>
            <h1 className = 'font-bold text-3xl mb-4'>{isSent ? 'Thank you!' : 'How did we do?'}</h1>
            <p className = 'text-textSecondary'>{isSent ? 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!' : 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'}</p>
        </div>
    )
}
export default TextContent