import ContactlessDelivery from "../UI/ContactlessDelivery";
import FoodDelivery from "../UI/FoodDelivery";
import GroceryDelivery from "../UI/GroceryDelivery";
import ServiceHeading from "../UI/ServiceHeading";

function Services() {
  return (
    <div className="h-max px-32 pt-32 bg-secondary rounded-[64px] flex flex-col gap-[246px]">
      <ServiceHeading />
      <div>
        <FoodDelivery />
        <GroceryDelivery />
        <ContactlessDelivery />
      </div>
    </div>
  );
}

export default Services;
