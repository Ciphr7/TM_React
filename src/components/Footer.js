import Button from "./Button"

const Footer = ({ onAdd, showAdd}) => {
  return (
    <footer>
         <Button  color= {showAdd ? 'orange' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        <p>ProMiles Software Development Corp </p>
        <p>Copyright &copy;  2022 </p>
        <a href="/about">About</a>
    </footer>
  )
}

export default Footer