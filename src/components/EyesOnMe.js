// Code EyesOnMe Component Here
export default function EyesOnMe(){
    function handleBlur(e){
        e.preventDefault()
        console.log("Eyes on Me!")            
    }        
    function handleFocus(e){
        e.preventDefault()
        console.log("Good!")        
    }

    return (
        <div>
            <button
                onBlur={handleBlur}
                onFocus={handleFocus}
            >Eyes on Me</button>
        </div>
    )
}