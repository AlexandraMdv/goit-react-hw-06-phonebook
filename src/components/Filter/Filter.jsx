import styles from './Filter.module.css';

const Filter = ({filter, handleFilterChange}) => {
    return (
        <div>
            <h2 className={styles.sectionTitle}>Contacts</h2>
            <label className={styles.label}>
                <span className={styles.labelTitle}>Find contacts by name</span>
                <input 
                    type="text"
                    name="filter"
                    placeholder="Search by name"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    )
}

export default Filter;