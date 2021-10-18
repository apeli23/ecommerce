import Layout from "../components/Layout"
import {Grid, Card, CardActionArea, Button, CardMedia, CardContent, Typography,CardActions} from '@material-ui/core'
import data from '../utils/data'
import Test from '../components/test';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Layout>
			<div>
				<h1>Products</h1>
				<Grid container spacing={3}>
					{data.products.map((product) => (
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
