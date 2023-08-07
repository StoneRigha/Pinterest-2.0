import app from "@/app/Shared/firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect } from "react";

function PinList({ userInfo }) {
  const db = getFirestore(app);
  useEffect(()=>{
    getUserPins();
  },[])

  const getUserPins = async () => {
    const q = query(
      collection(db, "pinterest-post"),
      where("email", "==", userInfo.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  };

  return <div>PinList</div>;
}

export default PinList;
