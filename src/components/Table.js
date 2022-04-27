import { DataGrid } from "@mui/x-data-grid";
import { useCallback } from "react";

export default function Table({
  items = [],
  rowId,
  pageSize = 5,
  rowsPerPageOptions = [5],
}) {
  const getColumns = useCallback(() => {
    return Object.keys(items[0] || {}).map((item) => ({
      field: item,
      headerName: item,
    }));
  }, [items]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={items}
        columns={getColumns()}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        getRowId={(item) => item[rowId]}
        width={120}
      />
    </div>
  );
}
