//components
import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import ShowMore from "@/components/ShowMore";

//types
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  });
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars;

  return (
    <main className="overflow-hidden"> 
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore innovation, design, power; experience the future of driving with us.</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard 
                  key={car}  
                  car={car} 
                />
              ))}
            </div>

            <ShowMore 
              pageNumber = {(searchParams.limit || 10)/10}
              isNext = {(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold ">No Match Found.</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
        
      </div>
    </main>
  )
}