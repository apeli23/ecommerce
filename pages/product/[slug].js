import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import useStyles from '../../utils/styles';
import {Grid, List, ListItem, Typography, Card, Button} from '@material-ui/core';
import Image from 'next/image';
import db from '../../utils/db';
import Product from '../../models/Product'

export default function ProductScreen(props) {
    const {product} = props;
    const classes = useStyles();

    if(!product) {
        return <div>Product Not Found!</div>
    }
    return (
        <Layout title ={product.name} description={product.description}>
            <div className ={classes.section}>
                <Link href = '/'><a>back to products</a></Link>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image 
                        src={product.image}
                        alt ={product.name}
                        width={640}
                        height={640}
                        layout='responsive'
                    >
                    </Image>
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem><Typography component='h1' variant="h1">{product.name}</Typography></ListItem>
                        <ListItem><Typography>Category: {product.category}</Typography></ListItem>
                        <ListItem><Typography>Brand: {product.brand}</Typography></ListItem>
                        <ListItem><Typography>Rating: {product.rating} stars({product.numReviews} reviews)</Typography></ListItem>
                        <ListItem>
                            <Typography>Description:{' '}{product.description}</Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Price</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>${product.price}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Status</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>
                                            {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant="contained" color="primary">
                                Add to cart
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}
//products coming from getServerSideProps() will be passed to the home component
//through props
export async function getServerSideProps(context){
    const {params} = context;
    const {slug} = params;

	await db.connect();
	//enabling lean option tells mongoose to skip instanciating a full mongoose doc 
	//and just give the POJO(Plain Object) to us. 
	const product = await Product.findOne({slug}).lean();
	await db.disconnect();
	return{
		props: {
			//for each item in product, we call convertDoctoObj function
			//to convert that item to JS object containing only primary data type
			product: db.convertDoctoObj(product),
		}
	}
}
