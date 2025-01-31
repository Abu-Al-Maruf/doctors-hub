import PropTypes from 'prop-types'
import {
    PuffLoader
} from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
    return (
        <div
            className={` ${smallHeight ? 'h-[250px]' : 'h-[100vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
        >
            <PuffLoader
                color="#1A56DB"
                size={60} />

        </div>
    )
}

LoadingSpinner.propTypes = {
    smallHeight: PropTypes.bool,
}

export default LoadingSpinner
