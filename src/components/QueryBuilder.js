import { useState, useCallback, lazy } from "react";
import { getQueryData } from "../api";
import QueryEditor from "./QueryEditor";
import { defaultListOfQueries } from "../util";

const Table = lazy(() => import("./Table"));

export default function QueryBuilder() {
  const [items, setItems] = useState(null);
  const [listOfQueries, setListOfQueries] = useState(defaultListOfQueries);

  const handleSubmit = useCallback(async (queryObj) => {
    const res = await getQueryData(queryObj);
    setItems(res);
  }, []);

  const handleSave = useCallback(
    (query) => {
      const updatedListOfQueries = [
        ...listOfQueries,
        {
          name: `Query-${listOfQueries.length + 1}`,
          query,
        },
      ];
      setListOfQueries(updatedListOfQueries);
    },
    [listOfQueries]
  );

  return (
    <>
      <QueryEditor
        handleSubmit={handleSubmit}
        handleSave={handleSave}
        listOfQueries={listOfQueries}
      />
      {items && (
        <>
          <h2>List of All products({items.length})</h2>
          <Table items={items} rowId="productID" />
        </>
      )}
    </>
  );
}
