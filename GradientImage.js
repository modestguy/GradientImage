import React, {Component} from 'react';
import propTypes from 'prop-types';
import * as styles from './GradientImage.less';

/**
 * Image with gradient
 */
class GradientImage extends Component {
    render () {
        return (
            <div className={styles.main }>
                {this.props.children}
                <div className={styles.gradient + ' ' + this.props.className}
                     style={{backgroundImage: `linear-gradient(to ${this.props.direction}, rgba(255, 255, 255, 0) 0, ${this.props.color} ${this.props.percents}%)`}}></div>
            </div>
        )
    }
}

GradientImage.propTypes = {
  direction: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  percents: propTypes.number.isRequired
};

GradientImage.defaultProps = {
    direction: 'bottom', // available values are 'bottom', 'top', 'left', 'right'
    color: '#000',
    percents: 100,
    className: ''
};

export default GradientImage;