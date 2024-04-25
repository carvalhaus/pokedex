import loading_image from ".././assets/loading.svg";
import loading_ellipse from ".././assets/loading-ellipse.svg";

function Loading() {
  return (
    <div className="pt-48 flex flex-col justify-center items-center gap-6">
      <img src={loading_image} className="w-80" />
      <img src={loading_ellipse} className="w-11 animate-spin" />
    </div>
  );
}

export default Loading;
