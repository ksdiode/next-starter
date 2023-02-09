import React from 'react';

function Page({ params }) {
  console.log('/blog/:id', params);
  return <div>Blog 상세보기</div>;
}

export default Page;
