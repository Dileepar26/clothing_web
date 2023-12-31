
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCardComponent from '../../components/productCard/ProductCardComponent';
import './categoryStyle.scss'

const CategoryComponent = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products && products.map((product) => (
                    <ProductCardComponent key={product.id} product={product} />
                ))}
            </div>
        </Fragment>
    )
}

export default CategoryComponent