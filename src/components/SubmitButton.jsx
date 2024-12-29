

const SubmitButton = ({onSubmit}) => {
  return (
    <button onClick = {onSubmit} className='bg-highlight hover:bg-textMain text-bgSecondary w-full rounded-full text-center content-center font-bold uppercase tracking-widest py-3 ease-linear duration-150'>Submit</button>
  )
}

export default SubmitButton