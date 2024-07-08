export const assetUrl = (assetId) => {
  if (assetId) {
    return `${process.env.NEXT_PUBLIC_API_URL}/assets/${assetId}`;
  } else {
    return `/media/avatars/300-3.jpg`;
  }
};
