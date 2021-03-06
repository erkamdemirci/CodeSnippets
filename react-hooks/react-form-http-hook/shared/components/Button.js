import { Link } from 'react-router-dom'

const Button = (props) => {
  if (props.href) {
    // button w HREF

    return (
      <a
        className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${props.danger && 'button--danger'}`}
        href={props.href}
      >
        {props.children}
      </a>
    )
  }
  if (props.to) {
    // button w TO

    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${props.danger && 'button--danger'}`}
      >
        {props.children}
      </Link>
    )
  }
  return (
    // html button

    <button
      className={`button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${props.danger && 'button--danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
