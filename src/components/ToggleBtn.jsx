const ToggleBtn = ({ toggleHandler }) => {
    return (
      <>
        <label
          htmlFor='Toggle3'
          className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
        >
          <input
            onChange={toggleHandler}
            id='Toggle3'
            type='checkbox'
            className='hidden peer'
          />
         
        </label>
      </>
    )
  }
  
  export default ToggleBtn