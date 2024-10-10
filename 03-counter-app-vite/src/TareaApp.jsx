import PropTypes from 'prop-types';


export const TareaApp = ({value}) => {
  return (
    <>  
        <h1>CounterApp</h1>
        <h2> { value } </h2>
    </>
  )
}



TareaApp.propTypes = {
    value: PropTypes.number.isRequired
    }


    TareaApp.defaultProps = {
        value: 1234
    }