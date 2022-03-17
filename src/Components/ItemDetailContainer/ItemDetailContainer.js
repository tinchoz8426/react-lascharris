import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import app from "../Firebase/Index";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Spinner from '../Spinner/spinner';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const db = getFirestore(app);
    const itemRef = doc(db, "items", id);
    getDoc(itemRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
      setLoader(false);
    });
  }, [id]);

  return loader ? (
    <Spinner />
  ) : (
    <Fragment>
      <ItemDetail item={item}> </ItemDetail>
    </Fragment>
  );
};

export default ItemDetailContainer;
