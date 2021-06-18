export default function Button(props) {
  return (
    <button className={`w-full text-primary font-medium ${props.color === 'primary' ? "bg-primary text-white" : ""} ${props.color === 'secondary' ? "bg-white dark:bg-primary-dark dark:text-white" : ""} shadow p-3 rounded-md ${props.styles}`} {...props} />
  )
}
