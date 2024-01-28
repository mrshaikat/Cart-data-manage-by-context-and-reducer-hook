import Star from "../assets/star.svg";

export default function Rating({value}) {
    const starts = Array(value).fill(Star);
  return (
    <div className="flex items-center space-x-1 mb-5">
        {starts.map((star, index) =>(
          <img key={index} src={Star} width="14" height="14" alt="" />
        ))}
    </div>
  );
}
