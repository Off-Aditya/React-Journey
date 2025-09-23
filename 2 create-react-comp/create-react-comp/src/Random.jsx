function Random(){
    
    let random = Math.random() * 100;

    return (
        <h3 style={{color: '#ff6aeeff'}}>Random Number: {Math.round(random)}</h3>
    );
}

export default Random;