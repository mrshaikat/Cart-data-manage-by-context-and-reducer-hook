import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../Sidebar";
import MovieList from "./MovieList";

export default function Page(){
    return (
     <>
        <Header />
        <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList/>
        </div>
      </main>
      <Footer/>
     </>
    );
}