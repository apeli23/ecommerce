import Layout from "../components/Layout"
import {Grid, Card, CardActionArea, Button, CardMedia, CardContent, Typography,CardActions} from '@material-ui/core'
import data from '../utils/data'
import Link from 'next/link'
import db from '../utils/db'
import Product from '../models/Product'

export default function Home(props) {
	//use {products} to render all products from dbase in home page
	const{products} = props;
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
									<Button size="small" collor="primary">Add to cart</Button>
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
