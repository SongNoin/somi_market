import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CartUI from "./cart.presenter";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);
  function onClickMoveToDetail(event) {
    router.push(
      `/list/${event.currentTarget.id.split("#")[0]}/detail/${
        event.currentTarget.id.split("#")[1]
      }`
    );
  }

  return (
    <CartUI cartItems={cartItems} onClickMoveToDetail={onClickMoveToDetail} />
  );
}
