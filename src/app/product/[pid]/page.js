const DynamicPage = ({ params, searchParams }) => {
  // console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h1>This is Dynamic Page: {params.pid}</h1>
      <h1>This is Search by category: {searchParams.category}</h1>
    </div>
  );
};

export default DynamicPage;
