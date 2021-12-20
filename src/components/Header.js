import PropTypes from "prop-types";


function Header({ text, bgColor, textColor }) {

    // function Header({ text, bgColor, textColor }) {
    // const headerStyles = {
    //     backgroundColor: 'gold',
    //     color: 'red',
    // }
    // <header style={{ backgroundColor: 'gold', color: 'red'}}>

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }


    return (
        <header style={ headerStyles }> {/*-inline styling */}
            <div className='container'>
               <h2>{ text }</h2>
            </div>
        </header>
    )
}

// default input Header({ text })

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

// forced defaultProp type ({ text })

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header
