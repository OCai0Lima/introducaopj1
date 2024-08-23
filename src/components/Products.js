import styled from 'styled-components';
import Card from './Card';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const productsData = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet.',
    imageUrl: 'https://example.com/product1.jpg',
  },
  
];

const Products = () => (
  <ProductsContainer>
    {productsData.map((product) => (
      <Card
        key={product.id}
        title={product.title}
        description={product.description}
        imageUrl={product.imageUrl}
      />
    ))}
  </ProductsContainer>
);

export default Products;
