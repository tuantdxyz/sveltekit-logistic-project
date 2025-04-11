export async function load({ params }) {
  console.log("Load function called with params:", params);
  return {
    slug: params.slug,
  };
}
