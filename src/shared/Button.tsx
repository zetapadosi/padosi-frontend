export default function Button(props) {
  return (
    <button className={`w-full text-primary font-medium ${props.primary ? "bg-primary text-white" : ""} ${props.secondary ? "bg-primary-bg" : ""} shadow p-3 rounded-md ${props.styles}`} {...props} />
  )
}
