import foodDelivery from "../assets/food-delivery.png";

function FoodDelivery() {
  return (
    <div className="w-full grid grid-cols-2">
      <div className=" flex flex-col gap-[32px] h-fit">
        <h2 className=" text-[#00A9FF] font-light text-[96px] leading-none">
          Express Food Delivery
        </h2>
        <p className="text-white font-light text-[48px] leading-[104.5%]">
          Our primary service is rapid food delivery, utilizing drones to bring
          your favorite meals to your doorstep in under 5 minutes. <br />
          <br />
          Whether it&apos;s a quick lunch or a late-night snack, Aerobite
          ensures you get your food fast and fresh.
        </p>
      </div>
      <img src={foodDelivery} width={803} height={859} alt="food delivery" />
    </div>
  );
}

export default FoodDelivery;
