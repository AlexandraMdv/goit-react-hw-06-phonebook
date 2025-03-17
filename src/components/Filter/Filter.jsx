import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
        <h2 className={styles.sectionTitle}>Contacts</h2>
        <label className={styles.label}>
            <span className={styles.labelTitle}>Find contacts by name</span>
            <input
                type="text"
                name={filter}
                placeholder="Search by name"
                value={filter}
                onChange={onChange}
            />
        </label>
    </div>
    
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};

export default Filter;