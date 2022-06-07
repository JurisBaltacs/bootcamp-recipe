import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import data from "../../../data/db.json"
import useFetch from "../../../hooks/useFetch";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Search({ handleSearch }) {
  function onChange(e) {
    handleSearch(e.target.value);
  }
  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={onChange} />
    </div>
  );
}

export default function BasicGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useFetch("http://localhost:3004/recipes");

  function handleSearch(newSearchQuery) {
    setSearchQuery(newSearchQuery);
  }

  const filteredItems = (data ?? []).filter((Recipe) => {
    return Recipe.title.includes(searchQuery);
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="App">
        <Search handleSearch={handleSearch} />
        <h2>Recipes:</h2>
      </div>
      <Grid container spacing={2}>
        {filteredItems.map((recipe) => {
          return (
            <Grid item xs={4} key={recipe.id}>
              <Item key={recipe.id}>
                <h1>{recipe.title}</h1>
                <h4>{recipe.cookingTime} to make</h4>
                <p>{recipe.ingredients}</p>
                <button>Cook this</button>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
