import NaviUI from "./navi.presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navi() {
  const router = useRouter();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get(
          "https://mock-api.ssomee.com/categories"
        );
        setCategory(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
    getCategory();
  }, []);

  function onClickMoveToList(event) {
    router.push(`/list/${event.target.id}`);
  }
  return <NaviUI category={category} onClickMoveToList={onClickMoveToList} />;
}
