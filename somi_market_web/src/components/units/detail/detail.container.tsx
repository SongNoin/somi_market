import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailUI from "./detail.presenter";

export default function Detail() {
  const router = useRouter();
  const [detail, setDetail] = useState([]);
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const prefix = router.query.productId;
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(
          `https://mock-api.ssomee.com/products/${prefix}`
        );
        setDetail(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
    getDetail();
  }, [prefix]);

  const handleChangeOne = (event) => {
    setOptionOne(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setOptionTwo(event.target.value);
  };

  const onClickAddCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let isExists = false;
    cart.forEach((cartEl) => {
      if (detail.prefix === cartEl.prefix) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담긴 상품입니다!");
      return;
    }

    const newEl = { ...detail };
    newEl.optionone = optionOne;
    newEl.optiontwo = optionTwo;
    delete newEl.__typename;
    cart.push(newEl);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("장바구니에 담았습니다!");
  };

  return (
    <DetailUI
      detail={detail}
      optionOne={optionOne}
      optionTwo={optionTwo}
      handleChangeOne={handleChangeOne}
      handleChangeTwo={handleChangeTwo}
      onClickAddCart={onClickAddCart}
    />
  );
}
