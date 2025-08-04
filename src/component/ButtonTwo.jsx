const ButtonTwo = ({children, color}) => {
    
    const colorVariants = {
        blue :" bg-blue-600 hover:bg-blue-500 text-white",
        red : "bg-red-500 hover:bg-red-400 text-white",
        yellow : "bg-yellow-300 hover:bg-yellow-400 text-black"
    }
    return(
        <>  
            <button className={`${colorVariants[color]} border-2 border-black`}>
                {children}
            </button>
            <br/>
        </>
    )
}


export default ButtonTwo;