const Button = ({color, children}) => {

    const colors = {
        black : "bg-black text-gray-300",
        blue : "bg-blue-500 text-white",
        white : "bg-white text-black"
    }


    return (
        <>
            <button className= {`${colors[color]} rounded-full px-2 py-1.5 font-sans text-sm/6 font-medium shadow`}>
                {children}
            </button>  
            <br/>
         

        </>
    )
}
export default Button;