import React from 'react';

function page({ params }) {
  console.log('/blog', params);
  return <div>Blog 목록</div>;
}

export default page;
