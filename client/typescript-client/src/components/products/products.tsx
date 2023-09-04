import { Grid, Typography, Button ,Card} from '@mui/material';
import React from 'react';
import { Navigation } from '../navigation/navigation';
import { NavLink } from 'react-router-dom';
import {gql} from '@apollo/client/core'
import {useQuery} from '@apollo/client/react'


const useGetAllProductsQuery = gql`
    query ExampleQuery {
    getAllPrizes {
        PrizeID
        NamePrize
        Odds
        Price
        Stars
        ImagePrize
    }
    }

`;


function Products(){
    
    const { loading, error, data, refetch } = useQuery(useGetAllProductsQuery);

    const [prizes, setPrizes] = React.useState<any[]>();
    
    

    React.useEffect(()=>{
    if(data){
        setPrizes(data.getAllPrizes)
    }
    }
    ,[data])   
    

    return (
        <Grid container  xs={12} justifyContent="center" alignItems="center" spacing={2} sx = {{border: '2px solid blue', m:0}}>
            {prizes?.map((prize, index) => (
              <Grid item  sx = {{height:'300px',width:'350px'}}>
                <Card key={index} sx={{padding:1}} >
                    <img src= {`${prize.ImagePrize}`}  alt="Prize" width="250" height="200"></img>
                    <Typography>Name:{prize.NamePrize.length > 18 ? `${prize.NamePrize.substring(0, 18)}...`: prize.NamePrize}</Typography>
                    <Typography>Odds: {prize.Odds}</Typography>
                    <Typography>Price: {prize.Price}</Typography>
                </Card>
              </Grid>
            ))}
        </Grid>
      );

}






export function ProductsView(){    
    

    return (
        <React.Fragment>
            <Navigation></Navigation>
            <Products></Products>
        </React.Fragment>
    )
}