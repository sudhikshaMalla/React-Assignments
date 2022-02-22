
type UsernameFieldProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UsernameField = (props: UsernameFieldProps) => {
    return (
        <div>
            Enter your Username:
            <br></br>
            <input type="text" value={props.value} onChange={props.handleChange}/>
        </div>
    );
}