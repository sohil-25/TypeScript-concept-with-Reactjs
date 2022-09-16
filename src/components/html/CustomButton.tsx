type ButtonProps = {
  variant: "primary" | "secondary";
  children:string
} &Omit<React.ComponentProps<"button">,'children'> ;

export const CustomButton = (props: ButtonProps) => {
  return (
    <button className={`class-with-${props.variant}`} 
    {...props}
    >
      {props.children}
    </button>
  );
};
