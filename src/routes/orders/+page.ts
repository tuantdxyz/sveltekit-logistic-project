// import type { PageLoad } from "./$types";
// import type { Tracking } from "$lib/models";

// export const load: PageLoad = async ({ fetch, url }) => {
//   const trackingId = url.searchParams.get("trackingId");

//   if (!trackingId) {
//     return {
//       status: 400,
//       error: new Error("Missing trackingId"),
//     };
//   }

//   try {
//     const res = await fetch(`/orders?trackingId=${trackingId}`);
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     const order: Tracking = await res.json();
//     return { order };
//   } catch (error) {
//     return {
//       status: 500,
//       error: new Error("Failed to fetch order"),
//     };
//   }
// };
