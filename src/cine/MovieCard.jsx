import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const {state, dispatch} = useContext(MovieContext);

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection= (movie) =>{
    setSelectedMovie(movie);
    setShowModal(true);
  }

  const handleAddToCart = (e,movie) =>{
    e.stopPropagation();
    const found = state.cartData.find(item => {
      return item.id === movie.id;
    })

    if(!found){
      // setCartData([...state.cartData, movie])
      dispatch({
        type: "addToCart",
        payload: {
          ...movie
        }
      });
      toast.success(`Movie ${movie.title} added Successfully`);
    }else{
      toast.warning(`Movie ${movie.title} Already added Successfully`);
    }


  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onCartAdd={handleAddToCart} onClose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <div onClick={()=> handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <Rating value={movie.rating} />
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e)=> handleAddToCart(e,movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
