import { useEffect, useState } from "react";
import Body from "../../componets/Body";

function Purchased() {
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    // Retrieve purchased items from local storage
    const storedPurchasedItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    setPurchasedItems(storedPurchasedItems);
  }, []);

  const handleCancelOrder = (itemId) => {
    // Filter out the canceled item from the purchased items
    const updatedPurchasedItems = purchasedItems.filter(
      (item) => item.id !== itemId
    );

    // Update the purchased items in local storage
    localStorage.setItem(
      "purchaseItems",
      JSON.stringify(updatedPurchasedItems)
    );

    // Update the state with the updated purchased items
    setPurchasedItems(updatedPurchasedItems);
  };

  return (
    <div>
      <Body>
        <div className="bg-zinc-900 bg-opacity-50 h-auto flex flex-col items-center gap-2 p-2 justify-center">
          <div className="font-bold bg-zinc-900 w-full h-auto p-1 flex justify-center">
            <h1>Purchased Items</h1>
          </div>
          <div className="bg-zinc-900 p-2 w-full min-h-[26rem]">
            {purchasedItems.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <p>Your purchase is empty.</p>
              </div>
            ) : (
              <div>
                <ul className="flex flex-col items-center gap-2">
                  {Array.from(
                    new Set(purchasedItems.map((item) => item.id))
                  ).map((itemId) => {
                    const item = purchasedItems.find(
                      (item) => item.id === itemId
                    );
                    const count = purchasedItems.filter(
                      (item) => item.id === itemId
                    ).length;

                    return (
                      <li
                        key={item.id}
                        className="flex items-center justify-between bg-zinc-600 bg-opacity-30 p-1 w-[60%]"
                      >
                        <div>
                          {item.name} -{" "}
                          <span className="text-amber-700 font-bold">
                            ${item.price}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-neutral-400">
                            {count > 1 ? `${count} items` : "1 item"}{" "}
                          </span>
                          <button
                            className="ml-10"
                            onClick={() => handleCancelOrder(item.id)}
                          >
                            Cancel Order
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Body>
    </div>
  );
}

export default Purchased;