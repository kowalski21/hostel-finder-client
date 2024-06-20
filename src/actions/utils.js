export const getImageNumber = () => {
  return Math.floor(Math.random() * 30) + 1;
};

export const renderImage = (imageId) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/api/assets/${imageId}`;
};

export const getStatus = (status) => {
  switch (status) {
    case "active":
      return "badge-success";
    case "pending":
      return "badge-warning";
    case "banned":
      return "badge-danger";
    default:
      return "badge-secondary";
  }
};
