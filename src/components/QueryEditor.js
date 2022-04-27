import { useCallback, useState } from "react";
import TextArea from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";

export default function QueryEditor({
  handleSubmit,
  handleSave,
  listOfQueries,
}) {
  const [query, setQuery] = useState("");
  const [selectedQuery, setSelectedQuery] = useState("");
  const [displayAlert, setDisplayAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleSaveClick = useCallback(() => {
    handleSave(query);
    setDisplayAlert(true);
    setMessage(
      `Query-${listOfQueries.length + 1} with query "${query}" is saved`
    );
  }, [query, listOfQueries, handleSave]);

  const handleSubmitClick = useCallback(() => {
    handleSubmit({
      query,
      name: selectedQuery,
    });
  }, [handleSubmit, query, selectedQuery]);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      const updatedQuery = listOfQueries.find((item) => item.name === value);
      setSelectedQuery(value);
      setQuery(updatedQuery.query);
    },
    [listOfQueries]
  );

  const handleClose = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setDisplayAlert(false);
  }, []);

  return (
    <div className="query_editor">
      <TextArea
        className="query_editor__textarea"
        value={query}
        maxRows={4}
        placeholder="Please enter your query here"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Query</InputLabel>
          <Select value={selectedQuery} label="Query" onChange={handleChange}>
            {listOfQueries.map((item) => {
              return (
                <MenuItem value={item.name} key={item.name}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Button
        size="small"
        onClick={handleSubmitClick}
        disabled={!query}
        variant="contained"
      >
        Fetch Data
      </Button>
      <Button
        size="small"
        onClick={handleSaveClick}
        disabled={!query}
        variant="contained"
      >
        Save Query
      </Button>
      <Snackbar
        open={displayAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}
