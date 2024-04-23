
import BagContext from "./BagContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * The `BagContextProvider` function manages a shopping bag state with functions to
 * add, remove, empty, increase, and decrease item quantities, leveraging local storage to persist the state.
 */
const BagContextProvider = ({ children }) => {
    const [bagItems, setBagItems] = useLocalStorage('bag', []);

   const addToBag = (item) => {
    setBagItems(bagItems => {
        const existingItemIndex = bagItems.findIndex(itemFromBag => itemFromBag.id === item.id);
        if (existingItemIndex !== -1) {
            // If item exists, increase the quantity
            const newBagItems = [...bagItems];
            newBagItems[existingItemIndex] = {
                ...newBagItems[existingItemIndex],
                quantity: newBagItems[existingItemIndex].quantity + 1
            };
            return newBagItems;
        } else {
            // If item doesn't exist, add it to the bag
            return [...bagItems, { ...item, quantity: 1 }];
        }
    });
}

    const removeFromBag = (itemId) => {
        setBagItems(bagItems.filter(item => item.id !== itemId));
    }

    const emptyBag = () => {
        setBagItems([]);
    }

    const increaseQuantity = (itemId) => {
        setBagItems(bagItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const decreaseQuantity = (itemId) => {
        setBagItems(bagItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    return (
        <BagContext.Provider value={{
            bagItems,
            addToBag,
            removeFromBag,
            emptyBag,
            increaseQuantity,
            decreaseQuantity
        }}>
            {children}
        </BagContext.Provider>
    );
}

export default BagContextProvider;
