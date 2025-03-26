import CategoryList from "./components/CategoryList";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider"

const HomePage = () => {
  return (
    <main className="">
      <section className="">
        <Slider />
      </section>
      <section className="py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h3 className="mb-8">Featured Products</h3>
        <ProductsList />
      </section>
      <section className="py-10 px-4">
        <h3 className="mb-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Categories</h3>
        <CategoryList />
      </section>
      <section className="py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h3 className="mb-8">Featured Products</h3>
        <ProductsList />
      </section>
    </main>
  );
}

export default HomePage