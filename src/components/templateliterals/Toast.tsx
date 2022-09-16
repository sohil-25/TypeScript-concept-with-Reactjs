/**
 * Position props can be one of
 * "left-center" | "left-top" | "left-bottom" |
 * "center"|
 * "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position : Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'>|'center'
}


export const Toast = (props:ToastProps) => {
 return <div>Toast Notification Position - {props.position}</div>
}