export const filterData = (data, filterCriteria) => {
  const filteredData = data?.filter((item) =>
    item.name.includes(filterCriteria)
  );
  return filteredData;
};

export const paginateData = (data, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
};


// Ubah fungsi sortData
export const sortData = (data, column, order) => {
  return data.slice().sort((a, b) => {
    const aValue = a[column] || ""; 
    const bValue = b[column] || "";
    if (order === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
};


