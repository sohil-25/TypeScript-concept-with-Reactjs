type GreetProps={
    name:string,
    message:number,
    isLoggedIn:boolean,
}

export const Greet = (props : GreetProps) => {
    return (
        <div>
            <h2>
               {props.isLoggedIn
               ?
               `Welcome ${props.name}! you have ${props.message} new msg`
               : 'Welcome Guest'
               }
            </h2>
        </div>
    )
}