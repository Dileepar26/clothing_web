import { Link } from 'react-router-dom'
import ProductCardComponent from '../productCard/ProductCardComponent'
import './categoryPreviewStyle.scss'

function CategoryPreviewComponent({title, products}) {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCardComponent key={product.id} product={product} />
                    ))}
            </div>
        </div>
    )
}

export default CategoryPreviewComponent
