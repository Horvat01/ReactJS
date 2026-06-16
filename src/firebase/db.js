import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc
    , addDoc
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
    const products = [];

    const querySnapshot = await getDocs(collection(db, "product"));

    querySnapshot.forEach((doc) => {
        products.push({
            ...doc.data(),
            id: doc.id
        });
    });

    return products;
};

export const getCategories = async () => {
    const categories = [];

    const querySnapshot = await getDocs(collection(db, "categories"));

    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name);
    });

    return categories;
};

export const getProductsByCategory = async (category) => {
    const q = query(
        collection(db, "product"),
        where("category", "==", category)
    );

    const products = [];

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        products.push({
            ...doc.data(),
            id: doc.id
        });
    });

    return products;
};

export const getDetail = async (id) => {
    const docRef = doc(db, "product", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            ...docSnap.data(),
            id: docSnap.id
        };
    }

    return null;
};


export const CreateOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"),order);

    console.log("Document written with ID: ", docRef.id);

}