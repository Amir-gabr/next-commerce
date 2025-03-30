import React from 'react'
import ProductImages from '../components/productImages';
import ProductDescription from '../components/ProductDescription';

export default function SinglePage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* image container */}
      <div className="">
        <ProductImages />
      </div>
      {/* description container */}
      <div className="">
        <ProductDescription />
      </div>
    </section>
  );
}
