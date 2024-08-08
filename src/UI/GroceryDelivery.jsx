import groceryDelivery from "../assets/grocery-delivery.png";

function GroceryDelivery() {
  return (
    <>
      <div className="w-full grid grid-cols-2">
        <div className=" flex flex-col gap-[32px] h-fit">
          <h2 className=" text-[#80B25B] font-light text-[96px] leading-none">
            Grocery Delivery
          </h2>
          <p className="text-white font-light text-[48px] leading-[104.5%]">
            Need groceries in a pinch? Aerobite drones can deliver a wide range
            of grocery items from local stores straight to your home. Enjoy the
            convenience of having your essentials delivered quickly and
            efficiently.
          </p>
        </div>
        <img
          src={groceryDelivery}
          width={803}
          height={859}
          alt="food delivery"
        />
      </div>
    </>
  );
}

export default GroceryDelivery;
