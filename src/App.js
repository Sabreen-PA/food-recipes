import { TextField, Grid, Button } from '@mui/material';
import './App.css';
import Axios from "axios";
import { useState } from 'react';

function App() {
  const [query,setQuery] =useState("");
  const [allRecipes,setRecipes] =useState([]);


  async function getRecipes(){
   console.log( process.env.REACT_APP_API_KEY);
    const url=`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}
    &from=0&to=3&calories=591-722&health=alcohol-free`;
  const recipes =await Axios.get(url);
  console.log(recipes.data);
  setRecipes(recipes.data);
  console.log(allRecipes);
  }

  return (
    <div className="App">
      <Grid container justifyContent={"center"} flexDirection={"column"}>
<Grid item>
  <h1>Food Recipes</h1>
</Grid>
<Grid item>
  <form>
  <TextField
          name="recipeName"
          label="Type Recipe"
          variant="outlined"
          size="small"
          fullWidth
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
  </form>

</Grid>
<Grid item>
<Button onClick={getRecipes}>
  Submit
</Button>
</Grid>
<Grid item>
{
         allRecipes.q
//           allRecipes.map((recipe)=>{
// return <p>{recipe}</p>
         // })
        }
</Grid>

      </Grid>
   
    </div>
  );
}

export default App;
