import { useSelector, useDispatch } from 'react-redux';
import { FilterForm, Title2 } from './Filter.styled';
import { getFilter } from 'components/redux/selectors';
import { changeFilter } from 'components/redux/actions';

const Filter = () => {

  const valueFiltered = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(changeFilter(e.currentTarget.value))
  };


  return (
    <div>
      <Title2>Contacts</Title2>
      <label>
      <span>Find contact by name</span>
        <FilterForm
          type="text"
          name="filter"
          onChange={onChange}
          value={valueFiltered}
          placeholder="Enter name to search"
        />
      </label>
    </div>
  );
};

export default Filter;




