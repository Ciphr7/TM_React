import Button from "./Button"

const Footer = ({ onAdd, showAdd}) => {
  return (
    <footer>
         <Button  color= {showAdd ? 'orange' : '#b10404'} text = {showAdd ? 'Close' : 'New Trip'} onClick={onAdd} />
        <p>ProMiles Software Development Corp </p>
        <p>Copyright &copy;  2022 </p>
        <a href="/about">About</a>
    </footer>
  )
}

export default Footer