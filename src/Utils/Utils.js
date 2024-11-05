import { toast } from "react-toastify";

// cart list functions start 
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart');
    if (storedListStr) {
        const storeList = JSON.parse(storedListStr);
        return storeList;
    }
    else {
        return [];
    }
};

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart', storedListStr);
    toast.success("Product Successfully Added in Cart List");
}

const deleteFormCartList = (id) => {
    const storedList = getStoredCartList();
    const index = storedList.indexOf(id);
    if (index !== -1) {
        storedList.splice(index, 1);
    }
    console.log(storedList);
    localStorage.setItem('cart', JSON.stringify(storedList));
    toast.success("Successfully removed from Cart List");
};
// cart list functions end

// wishlist functions start 
const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wishlist');
    if (storedListStr) {
        const storeList = JSON.parse(storedListStr);
        return storeList;
    }
    else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        toast.error("Already exists in Wish List");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wishlist', storedListStr);
        toast.success("Product Successfully Added in Wish List");
    }
};

const deleteFormWishList = (id) => {
    const storedList = getStoredWishList();
    const index = storedList.indexOf(id);
    if (index !== -1) {
        storedList.splice(index, 1);
    }
    console.log(storedList);
    localStorage.setItem('wishlist', JSON.stringify(storedList));
    toast.success("Successfully removed from Wish List");
};
// wishlist functions end 



export { getStoredCartList, addToStoredCartList, deleteFormCartList, getStoredWishList, addToStoredWishList, deleteFormWishList };