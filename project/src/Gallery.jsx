/* eslint-disable react/prop-types */
import Masonry from "react-masonry-css";
import { GalleryItem } from "./GalleryItem";

const gallery = [
  {
    href: "https://imgbb.com/",
    src: "https://i.ibb.co/kGQvBG5/Jennifer-Magpantay.png",
    alt: "Jennifer-Magpantay",
  },
  {
    href: "https://imgbb.com/",
    src: "https://i.ibb.co/PZBzZPs/Serena-Quacquerelli.png",
    alt: "Serena-Quacquerelli",
  },
  {
    href: "https://ibb.co/0Byzbsq",
    src: "https://i.ibb.co/LQds7NS/Alessandro-Fresi.jpg",
    alt: "Alessandro-Fresi",
  },
  {
    href: "https://ibb.co/Sd47S7P",
    src: "https://i.ibb.co/LJXhKh8/Robertina-Renzi.png",
    alt: "Robertina-Renzi",
  },

  {
    href: "https://ibb.co/gmrNRNG",
    src: "https://i.ibb.co/34T2C2w/Grazia-Maria-Romano.png",
    alt: "Grazia-Maria-Romano",
  },
  {
    href: "https://imgbb.com/",
    src: "https://i.ibb.co/xMcF3HC/Vincenzo-Moschese.png",
    alt: "Vincenzo-Moschese",
  },
  {
    href: "https://ibb.co/ZGdSZL8",
    src: "https://i.ibb.co/WGn0Txy/Anita-Alexandra-Piroddi.png",
    alt: "Anita-Alexandra-Piroddi",
  },
  {
    href: "https://imgbb.com/",
    src: "https://i.ibb.co/k4GCrz8/Alessio-Zambaglioni.png",
    alt: "Alessio-Zambaglioni",
  },
  {
    href: "https://ibb.co/XbG6V08",
    src: "https://i.ibb.co/yXxKVvS/Carmen-Graziano.jpg",
    alt: "Carmen-Graziano",
  },
  {
    href: "https://ibb.co/cx0kw1Y",
    src: "https://i.ibb.co/0QTmKcs/Erika.png",
    alt: "Erika",
  },
  {
    href: "https://ibb.co/0hwxxJR",
    src: "https://i.ibb.co/2gbTTK1/Andrea-Pedrina.jpg",
    alt: "Andrea-Pedrina",
  },
  {
    href: "https://ibb.co/GW82WqC",
    src: "https://i.ibb.co/n7Yc7FQ/Andrea-Balicco.png",
    alt: "Andrea-Balicco",
  },
  {
    href: "https://ibb.co/7pnHkv4",
    src: "https://i.ibb.co/1Xr3zZ6/Annachiara-Candiani.png",
    alt: "Annachiara-Candiani",
  },
  {
    href: "https://ibb.co/DRRB8FG",
    src: "https://i.ibb.co/crrWC9b/Davide-Lochis.jpg",
    alt: "Davide-Lochis",
  },
  {
    href: "https://ibb.co/f4gqtMd",
    src: "https://i.ibb.co/4PqKMWR/Chiara-De-Lucia.jpg",
    alt: "Chiara-De-Lucia",
  },
  {
    href: "https://ibb.co/BcfTrYD",
    src: "https://i.ibb.co/8NmPdQ3/Elisa-Bruni.png",
    alt: "Elisa-Bruni",
  },
  {
    href: "https://ibb.co/r6cpDfz",
    src: "https://i.ibb.co/d2Lp8JV/Emanuele-Daloiso.png",
    alt: "Emanuele-Daloiso",
  },
  {
    href: "https://ibb.co/gZv2Wsq",
    src: "https://i.ibb.co/chbB8zf/Federico-Fasciani.jpg",
    alt: "Federico-Fasciani",
  },
  {
    href: "https://ibb.co/ZT3SjRK",
    src: "https://i.ibb.co/3hwv35W/Francesco-Navoni.jpg",
    alt: "Francesco-Navoni",
  },
  {
    href: "https://ibb.co/dKGBXdY",
    src: "https://i.ibb.co/GPc7GKS/Luca-Biego.png",
    alt: "Luca-Biego",
  },
  {
    href: "https://ibb.co/fF3R3HH",
    src: "https://i.ibb.co/LRTwT11/Lucia-Angiolillo.png",
    alt: "Lucia-Angiolillo",
  },
  {
    href: "https://ibb.co/SPFXGy1",
    src: "https://i.ibb.co/QfyFtQq/Giuseppe-Verrillo.png",
    alt: "Giuseppe-Verrillo",
  },
  {
    href: "https://ibb.co/HG9f88N",
    src: "https://i.ibb.co/GCr4SSs/Luigi-Lanza.jpg",
    alt: "Luigi-Lanza",
  },
  {
    href: "https://ibb.co/vh8K8JV",
    src: "https://i.ibb.co/5kVfV5G/Luisa-castellari.jpg",
    alt: "Luisa-castellari",
  },
  {
    href: "https://ibb.co/v1q3KKx",
    src: "https://i.ibb.co/F635jjb/Nicola-Ceresa.png",
    alt: "Nicola-Ceresa",
  },
  {
    href: "https://ibb.co/1TMfGG0",
    src: "https://i.ibb.co/6F8R00y/Rosario-Firrincieli.png",
    alt: "Rosario-Firrincieli",
  },
  {
    href: "https://ibb.co/Cmd8147",
    src: "https://i.ibb.co/k5nBHz8/Vincenzo-Di-Cicco.png",
    alt: "Vincenzo-Di-Cicco",
  },
  {
    href: "https://ibb.co/V3c8rkZ",
    src: "https://i.ibb.co/stdrkXG/Simone-Ventrice.png",
    alt: "Simone-Ventrice",
  },
  {
    href: "https://ibb.co/MVfgVV1",
    src: "https://i.ibb.co/hWcgWWd/Daniele-Paderi.jpg",
    alt: "Daniele-Paderi",
  },
  {
    href: "https://imgbb.com/",
    src: "https://i.ibb.co/7kqftKF/Giulia-Redaelli.jpg",
    alt: "Giulia-Redaelli",
  },
  {
    href: "https://ibb.co/DRJyvW7",
    src: "https://i.ibb.co/FDrMy3B/Fabiola-Pagani.png",
    alt: "Fabiola-Pagani",
  },
  {
    href: "https://imgbb.com/",
    src: "https://i.ibb.co/qgq6j82/Cemal-Dural.jpg",
    alt: "Cemal-Dural",
  },
  {
    href: "https://ibb.co/X2RzSxW",
    src: "https://i.ibb.co/p0F3Jj1/Andrea-Cogliati.jpg",
    alt: "Andrea-Cogliati",
  },
  {
    href: "https://ibb.co/Pt1mQc0",
    src: "https://i.ibb.co/YbfRZcw/Alessandro-Fiamingo.png",
    alt: "Alessandro-Fiamingo",
  },
  {
    href: "https://ibb.co/x7rFQCn",
    src: "https://i.ibb.co/fxTD713/Giuseppe-Cusano.jpg",
    alt: "Giuseppe-Cusano",
  },
  {
    href: "https://ibb.co/JBR4bvF",
    src: "https://i.ibb.co/DVDy69g/Lorenzo-Vignati.png",
    alt: "Lorenzo-Vignati",
  },
  {
    href: "https://ibb.co/d5dGKQv",
    src: "https://i.ibb.co/pLtJX3T/Cesare-Caocci.png",
    alt: "Cesare-Caocci",
  },
  {
    href: "https://ibb.co/JQHrtrX",
    src: "https://i.ibb.co/sHqsRsL/Nidal-Tahir.jpg",
    alt: "Nidal-Tahir",
  },
  {
    href: "https://ibb.co/4MB4LkV",
    src: "https://i.ibb.co/TRzPGyg/Riccardo-Dell-Omo.jpg",
    alt: "Riccardo-Dell-Omo",
  },
  {
    href: "https://ibb.co/HhSmjYQ",
    src: "https://i.ibb.co/0s7PxZ3/Natalia-Rombolotto.jpg",
    alt: "Natalia-Rombolotto",
  },

  {
    href: "https://ibb.co/Dwz1d5J",
    src: "https://i.ibb.co/6DryQgM/Rita-Pandolfo.jpg",
    alt: "Rita-Pandolfo",
  },
  {
    href: "https://ibb.co/jLkWpKD",
    src: "https://i.ibb.co/55hn7DL/Chiara-Minotti.jpg",
    alt: "Chiara-Minotti",
  },
  {
    href: "https://ibb.co/F3qztyw",
    src: "https://i.ibb.co/9g3Wj1T/Martina-Bin.jpg",
    alt: "Martina-Bin",
  },
  {
    href: "https://ibb.co/4sDn7gv",
    src: "https://i.ibb.co/7gTdXNM/Kateryna-Kutsenko.jpg",
    alt: "Kateryna-Kutsenko",
  },
  {
    href: "https://ibb.co/FWNW2wC",
    src: "https://i.ibb.co/BPdPbZF/Simone-Pogliani.png",
    alt: "Simone-Pogliani",
  },
  {
    href: "https://ibb.co/ySh47H1",
    src: "https://i.ibb.co/xHmFdx0/Luisa-Bove.jpg",
    alt: "Luisa-Bove",
  },
  {
    href: "https://ibb.co/3fS9rRj",
    src: "https://i.ibb.co/KNVp0Kf/Marco-Ceriani.png",
    alt: "Marco-Ceriani",
  },
  {
    href: "https://imgbb.com/",
    src: "https://i.ibb.co/mTqXHzm/Andrea-Fratini.png",
    alt: "Andrea-Fratini",
  },
  {
    href: "https://ibb.co/DLf30LH",
    src: "https://i.ibb.co/nRMhxRN/Gabriele-Mandara.jpg",
    alt: "Gabriele-Mandara",
  },
  {
    href: "https://ibb.co/8jGfS7D",
    src: "https://i.ibb.co/rZqz1wG/Anna-Colombo.jpg",
    alt: "Anna-Colombo",
  },
  {
    href: "https://ibb.co/rdpCw73",
    src: "https://i.ibb.co/9Z4Fr8h/Laura-Licari.jpg",
    alt: "Laura-Licari",
  },
  {
    href: "https://ibb.co/5r2vvSz",
    src: "https://i.ibb.co/T4rRR7n/Diletta-De-Munno.png",
    alt: "Diletta-De-Munno",
  },
  {
    href: "https://ibb.co/YyFm5Xz",
    src: "https://i.ibb.co/5ngmQkN/Daniele-Paiano.jpg",
    alt: "Daniele-Paiano",
  },
  {
    href: "https://ibb.co/n6fN9TS",
    src: "https://i.ibb.co/pbZBcgp/Alessandro-Sala.png",
    alt: "Alessandro-Sala",
  },
  {
    href: "https://imgbb.com/",
    src: "https://i.ibb.co/qkWBdJt/Luca-Cappiello.jpg",
    alt: "Luca-Cappiello",
  },
  {
    href: "https://ibb.co/GpSCxqs",
    src: "https://i.ibb.co/jfX36SV/Mirko-Lumina.png",
    alt: "Mirko-Lumina",
  },
];

export const Gallery = ({ onClick }) => {
  const formatAltText = (text) => {
    return String(text).replaceAll("-", " ");
  };

  return (
    <Masonry
      //breakpointCols={breakpointColumnsObj}
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {gallery &&
        gallery.map((item, index) => (
          <div
            key={item.alt}
            className="image--container"
            data-index={index}
            onClick={onClick}
          >
            <GalleryItem href={item.href} src={item.src} alt={item.alt} />
            <span className="signature">{formatAltText(item.alt)}</span>
          </div>
        ))}
    </Masonry>
  );
};
