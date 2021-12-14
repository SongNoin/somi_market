import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailUI from "./detail.presenter";

export default function Detail() {
  const router = useRouter();
  const [detail, setDetail] = useState([]);
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleChangeOne = (event) => {
    setOptionOne(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setOptionTwo(event.target.value);
  };
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
  console.log(detail);
  return (
    <DetailUI
      detail={detail}
      optionOne={optionOne}
      optionTwo={optionTwo}
      handleChangeOne={handleChangeOne}
      handleChangeTwo={handleChangeTwo}
    />
  );
}
