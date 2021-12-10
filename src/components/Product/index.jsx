import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCart } from "../../store/modules/cart/actions";
import { Button, Container } from "./styles";
const Product = () => {
  const selector = useSelector((store) => store.products);
  const dispath = useDispatch();

  return (
    <>
      <Container>
        {selector.map((se) => (
          <ul key={se.id}>
            <img src={se.img} alt={se.name} />
            <li>{se.name}</li>
            <li>
              <strong>Preço à vista : </strong> R${se.price},00
            </li>
            <Button onClick={() => dispath(addCart(se, se.qnt))}>
              Adicionar ao Carrinho
            </Button>
          </ul>
        ))}
      </Container>
    </>
  );
};
export default Product;
