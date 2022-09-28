import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

const Search = () => {

    const [search, setsearch] = useState(null)

  return (
      <AsyncPaginate
        placeholder='search for city'
        debounceTimeout={600}
        value={search}
      />
  )
}

export default Search;