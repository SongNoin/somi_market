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
  }, []);
  console.log(products);
  return <ListUI products={products} />;
}