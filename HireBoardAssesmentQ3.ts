
type RestaurantPreference = {
  cuisine: string;
  price: string;
};

type Restaurant = RestaurantPreference & {
  name: string;
};

function recommendRestaurant(
  preference: RestaurantPreference,
  restaurants: Restaurant[],
): string {
  const match = restaurants.find(
    restaurant =>
      restaurant.cuisine === preference.cuisine &&
      restaurant.price === preference.price,
  );

  return match?.name ?? "No match found";
}

console.log(
  recommendRestaurant(
    { cuisine: "Italian", price: "medium" },
    [
      { name: "A", cuisine: "Italian", price: "medium" },
      { name: "B", cuisine: "Italian", price: "high" },
    ],
  ),
);

console.log(
  recommendRestaurant(
    { cuisine: "Mexican", price: "low" },
    [
      { name: "A", cuisine: "Italian", price: "medium" },
      { name: "B", cuisine: "Italian", price: "high" },
    ],
  ),
);


