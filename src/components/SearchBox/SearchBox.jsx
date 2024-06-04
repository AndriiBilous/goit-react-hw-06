import { useSelector, useDispatch } from 'react-redux';
import { filterItem } from '..//../redux/filtersSlice';

function SearchBox() {
    const filters = useSelector(state => state.filters.name);
    const dispatch = useDispatch();

    const handleChange = value => {
        dispatch(filterItem(value));
    };
    return (
        <div>
            <p>Find contacts:</p>
            <input
                type="text"
                value={filters.trim()}
                onChange={event => handleChange(event.target.value)}
            />
        </div>
    );
}
export default SearchBox;
