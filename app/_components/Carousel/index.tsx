// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import styles from "./index.module.css";

// type Props = {
//   images: { url: string }[];
// };

// export default function Carousel({ images }: Props) {
//   const [current, setCurrent] = useState(0);

//   const next = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prev = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div className={styles.carousel}>
//       <div
//         className={styles.inner}
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((img, i) => (
//           <div className={styles.item} key={i}>
//             <Image
//               src={img.url}
//               alt="image"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* 前へ */}
//       <button className={styles.prevBtn} onClick={prev}>
//         ‹
//       </button>

//       {/* 次へ */}
//       <button className={styles.nextBtn} onClick={next}>
//         ›
//       </button>
//     </div>
//   );
// }
