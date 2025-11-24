import Image from "next/image";

type Props = {
  images: { url: string }[];
};

export default function Carousel({ images }: Props) {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ maxWidth: "600px", margin: "0 auto" }} // ★ サイズ縮小
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="4000"
          >
            <Image
              src={img.url}
              className="d-block w-100"
              alt="Diary Image"
              width={500}
              height={550}
            />
          </div>
        ))}
      </div>

      {/* 前へボタン */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* 次へボタン */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
