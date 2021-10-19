import Layout from "../components/Layout"
import {Grid, Card, CardActionArea, Button, CardMedia, CardContent, Typography,CardActions} from '@material-ui/core'
import Link from 'next/link'
import db from '../utils/db'
import Product from '../models/Product'
import axios from 'axios';
import {useRouter} from 'next/router';
import {useContext} from 'react';
import {Store} from '../utils/Store';



export default function Home(props) {
	const {state, dispatch} = useContext(Store)
	const router = useRouter();
	//use {products} to render all products from dbase in home page
	const{products} = props;


	const addToCartHandler = async(product) => {
		const existItem = state.cart.cartItems.find(x=>x._id === product._id);
		const quantity = existItem ? existItem.quantity + 1 : 1;
        const {data} = await axios.get(`/api/products/${product._id}`);

		if (data.countInStock < quantity){
            window.alert('Sorry. Product is out of stock. Please try again.');
            return;
        }

        dispatch({type: "CART_ADD_ITEM", payload: {...product, quantity } });
        router.push('/cart');
    }
  return (
    <div>
      <Layout>
			<div>
				<h1>Products</h1>
				<Grid container spacing={3}>
					{products.map((product) => (
						<Grid item md={4} key={product.name}>
							<Card>
								<Link href={`/product/${product.slug}`} passHref>
									<CardActionArea>
										<CardMedia
											component="img"
											image={product.image}
											title={product.name}
										></CardMedia>
										<CardContent>
											<Typography>
												{product.name}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Link>
								<CardActions>
									<Typography>${product.price}</Typography>
									<Button 
										size="small" 
										color="primary"
										onClick={() => addToCartHandler(product)}
									>Add to cart</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</div>
		</Layout>
	</div>
  )
}

//products coming from getServerSideProps() will be passed to the home component
//through props
export async function getServerSideProps(){
	await db.connect();
	//enabling lean option tells mongoose to skip instanciating a full mongoose doc 
	//and just give the POJO(Plain Object) to us. 
	const products = await Product.find({}).lean();
	await db.disconnect();
	return{
		props: {
			//for each item in product, we call convertDoctoObj function
			//to convert that item to JS object containing only primary data type
			products: products.map(db.convertDoctoObj),
		}
	}
}
