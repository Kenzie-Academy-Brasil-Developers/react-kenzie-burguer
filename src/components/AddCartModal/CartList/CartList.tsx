import { CartCard } from "./CartCard";
import { StyledCartList } from "./StyledCartList";

export function CartList() {
  return (
    <StyledCartList>
      <CartCard />
      <CartCard />
      <CartCard />
    </StyledCartList>
  );
}
