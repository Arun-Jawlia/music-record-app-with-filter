import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.getAll("genre") || []);
  // const [selectByYear, setSelectByYear] = useState(
    // searchParams.getAll("year") || ''
  // );
  const [sortBy, setSortBy] = useState(searchParams.getAll("sortBy") || "");

  //   Function to handle filter using checkbox
  const handleFilterByGenre = (e) => {
    const options = e.target.value;
    // toggle functionality, if present remove it else add it
    let newCategory = [...category];
    if (newCategory.includes(options)) {
      newCategory.splice(newCategory.indexOf(options), 1);
    } else {
      newCategory.push(options);
    }
    setCategory(newCategory);
  };

  // // Function to handle filter by year
  // const handleFilterByYear = (e) => {
  //   let option = e.target.value;
   


  //   let newOption = [...option];
  //   if (newOption.includes(option)) {
  //     newOption.splice(newOption.indexOf(option), 1);
  //   } else {
  //     newOption.push(option);
  //   }

  //   setSelectByYear(newOption);
  // };

  // console.log(selectByYear);
  // console.log(category);

  //   To render search params
  useEffect(() => {
    const params = {};
    category && (params.genre = category);
    // selectByYear && (params.year = selectByYear);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [category, setSearchParams, sortBy]);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <h2>Filter</h2>
      <div>
        <input
          defaultChecked={category.includes("K-Pop")}
          type="checkbox"
          value="K-Pop"
          onChange={handleFilterByGenre}
        />
        <label htmlFor="">K-POP</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes("Country")}
          type="checkbox"
          value="Country"
          onChange={handleFilterByGenre}
        />
        <label htmlFor="">Country</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes("Pop")}
          type="checkbox"
          value="Pop"
          onChange={handleFilterByGenre}
        />
        <label htmlFor="">POP</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes("Holiday")}
          type="checkbox"
          value="Holiday"
          onChange={handleFilterByGenre}
        />
        <label htmlFor="">Holiday</label>
      </div>

      <div>
        <input
          defaultChecked={category.includes("Heavy Metal")}
          type="checkbox"
          value="Heavy Metal"
          onChange={handleFilterByGenre}
        />
        <label htmlFor="">Heavy Metal</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes("Classical Crossover")}
          type="checkbox"
          value="Classical Crossover"
          onChange={handleFilterByGenre}
        />
        <label htmlFor="">Classical Crossover</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes("Rock")}
          type="checkbox"
          value="Rock"
          onChange={handleFilterByGenre}
        />
        <label htmlFor="">Rock</label>
      </div>



{/* ----------------------------------------------------------------------------------------- */}



      {/* <h3>Select by Year</h3>
      <div>
        <div>
          <input
            // defaultChecked={selectByYear.includes("2017")}
            type="checkbox"
            value='2017'
            onChange={handleFilterByYear}
          />
          <label>2017</label>
        </div>
        <div>
          <input
            // defaultChecked={selectByYear.includes("2018")}
            type="checkbox"
            value="2018"
            onChange={handleFilterByYear}
          />
          <label htmlFor="">2018</label>
        </div>
        <div>
          <input
            // defaultChecked={selectByYear.includes("2019")}
            type="checkbox"
            value="2019"
            onChange={handleFilterByYear}
          />
          <label htmlFor="">2019</label>
        </div>
        <div>
          <input
            // defaultChecked={selectByYear.includes("2020")}
            type="checkbox"
            value="2020"
            onChange={handleFilterByYear}
          />
          <label htmlFor="">2020</label>
        </div>
      </div>

 */}





      {/* ---------------------------------------------------------------- */}

      <h3>Sort</h3>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value={"asc"}
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            value={"desc"}
            name="sortBy"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </>
  );
};

export default FilterSort;
