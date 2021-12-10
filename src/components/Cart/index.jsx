import { useSelector } from "react-redux";
import { ButtonEx, CartEmpty, ContainerCart } from "./style";
import { ContainerCartAdd } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCartXFill } from "react-icons/bs";
import { rmCart } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";
const Cart = () => {
  const selector = useSelector((store) => store.cart);
  const dispath = useDispatch();

  return (
    <ContainerCartAdd>
      <h1>
        Seu carrinho <AiOutlineShoppingCart />
      </h1>
      {selector.length === 0 ? (
        <CartEmpty>
          Carrinho Vazio
          <BsCartXFill />
        </CartEmpty>
      ) : (
        <>
          <ContainerCart>
            {selector.map((sel) => (
              <ul key={sel.id}>
                <img src={sel.img} alt={sel.name} />
                <li>{sel.name}</li>
                <li>
                  <strong>Preço à vista </strong>: R$ {sel.price},00
                </li>
                <ButtonEx onClick={() => dispath(rmCart(sel.id, sel.qnt, sel))}>
                  Remover do carrinho
                </ButtonEx>
              </ul>
            ))}
          </ContainerCart>
          <h2>
            Total à pagar: R$
            {selector.reduce((acc, val) => val.price + acc, 0)}
            ,00
          </h2>
        </>
      )}
    </ContainerCartAdd>
  );
};
export default Cart;
