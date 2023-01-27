import { TextField, Grid, Button } from "@mui/material";
import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [allRecipes, setRecipes] = useState([]);

  async function getRecipes() {
    console.log(process.env.REACT_APP_API_KEY);
    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}
    &from=0&to=10`;
    const recipes = await Axios.get(url);
    console.log(recipes.data);
    setRecipes(recipes.data.hits);
    console.log(allRecipes);
  }

  return (
    <div className="App">
      <Grid
        container
        justifyContent={"center"}
        flexDirection={"column"}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item color={"green"}>
          <h1>Food Recipes</h1>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={12}
          alignContent={"center"}
          mx={"auto"}
          width={"50%"}
        >
          <form>
            <TextField
              name="recipeName"
              label="Type Recipe"
              variant="outlined"
              size="small"
              fullWidth
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </Grid>
        <Grid item>
          <Button
            onClick={getRecipes}
            variant="contained"
            color="success"
            sx={{
              my: 3,
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        flexDirection={"row"}
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={{ xs: 1 }}
        rowSpacing={4}
        sx={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-evenly",
          height: "100%",
          width: "100%",
        }}
      >
        {allRecipes.map((recipe) => {
          return (
            <Grid item xs={4} sm={4} md={4} sx={{ alignContent: "center" }}>
              <RecipeTile recipe={recipe}></RecipeTile>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
