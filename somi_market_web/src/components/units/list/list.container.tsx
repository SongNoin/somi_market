import ListUI from "./list.presenter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function List() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const categoryId = router.query.id;
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://mock-api.ssomee.com/products/${categoryId}/${page}?order=date-desc`
        );
        setProducts(response.data.products);
      } catch (error) {
        alert(error.message);
      }
    };
    getProducts();
  }, [categoryId]);

  function onClickMoveToDetail(event) {
    router.push(`/list/${categoryId}/detail/${event.currentTarget.id}`);
  }

  function onClickMoveToCart() {
    router.push("/cart");
  }
  if (!products) setProducts([]);
  return (
    <ListUI
      products={products}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToCart={onClickMoveToCart}
    />
  );
}
