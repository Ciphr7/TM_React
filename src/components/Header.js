import PropTypes from 'prop-types'


const Header = ({title}) => {
  
  

  return (
    <header className="text-3xl text-white p-2 text-center font-bold bg-red-600"> 
        <h1 >{title} <span className='font-extralight'>&reg;</span></h1>
     
    </header>
  )
}

Header.defaultProps = {
    title: 'defaul title',
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header