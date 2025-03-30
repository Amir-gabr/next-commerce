import React from 'react'
import LandPageList from '../components/LandPageList'
import Filters from '../components/Filters'
import ProductsList from '../components/ProductsList'

export default function ListPage() {
  return (
    <main className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <section className="py-10 h-[calc(100vh-80px)] overflow-hidden">
        <LandPageList />
      </section>
      <section className="py-10">
        <Filters />
      </section>
      <section className="py-10">
        <h3 className="mb-8">All Products</h3>
        <ProductsList />
      </section>
    </main>
  );
}
