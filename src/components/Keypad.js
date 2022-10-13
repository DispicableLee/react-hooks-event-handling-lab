// Code Keypad Component Here

function Keypad (){
    function handleSubmit(e){
        e.preventDefault()
        console.log("entering password...")
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
            <input 
                type="number"
            />
            </form>
        </div>
    )
}

export default Keypad;