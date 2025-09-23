export function Hello(){

    let myName = 'Aditya';
    let fullName = ()=>{
        return 'Aditya Singh';
    }
    return (
        <div>
            <h3>Hey {myName}, are you there? </h3>
            <h3>{fullName()} am I audible.</h3> 
            
        </div>
    );
}