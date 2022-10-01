import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react" ;
import { GEO_API_URL, geoApiOptions } from '../../api'

const Search = ({onSearchChange}) => {

  const [search, setsearch] = useState(null)

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
  };

  const handleChange = (searchData) => {
    setsearch(searchData) 
    onSearchChange(searchData)
  }


  return (
      <AsyncPaginate
        placeholder='search for city'
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
  )
}

export default Search;