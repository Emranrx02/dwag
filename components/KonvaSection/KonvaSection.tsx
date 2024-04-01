/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";
import { IoIosCloseCircleOutline } from "react-icons/io";

const MiloImage = ({
  img,
  stageSize,
}: {
  img: any;
  stageSize: { width: number; height: number };
}) => {
  const [image] = useImage("https://i.ibb.co/2smp7cR/MILO.png", "anonymous");
  const [image1] = useImage(img, "anonymous");
  const [isSelected, setSelected] = useState(false);
  const shapeRef = useRef<HTMLElement | undefined>();
  const trRef = useRef();
  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      if (!trRef.current) return;
      //@ts-ignore
      trRef.current.nodes([shapeRef.current]);
      //@ts-ignore
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  function handleTap(e: MouseEvent) {
    setSelected((val) => !val);
  }
  return (
    <div>
      {img && (
        <Image
          id="img2"
          width={stageSize.width}
          height={stageSize.height}
          image={image1}
        />
      )}
      <Image
        //@ts-ignore
        ref={shapeRef}
        //@ts-ignore
        onTap={handleTap}
        //@ts-ignore
        onClick={handleTap}
        width={stageSize.width / 2}
        x={stageSize.width / 4}
        y={stageSize.height / 2}
        height={stageSize.height / 2}
        draggable
        image={image}
      />
      {isSelected && (
        <Transformer
          //@ts-ignore
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </div>
  );
};

function downloadURI(uri: string, name: string) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function KonvaSection() {
  const file = useRef(undefined);
  const [image, setImage] = useState<any>();
  const [stageSize, setStageSize] = useState({ width: 700, height: 600 });
  const stageRef = useRef();

  const handleSelectFile = (e: any) => {
    if (!image) {
      //@ts-ignore
      file.current?.click();
    } else {
      //@ts-ignore
      const uri = stageRef.current?.toDataURL({
        mimeType: "image/png",
        quality: 1,
        pixelRatio: 3,
      });
      downloadURI(uri, "Milo.png");
    }
  };

  const handleChange = (e: any) => {
    //@ts-ignore
    const fl = file.current?.files[0];
    if (fl) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageSrc = event.target?.result;
        setImage(imageSrc);
      };
      reader.readAsDataURL(fl);
    }
  };

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth > 768) {
        setStageSize({ width: 700, height: 600 });
      } else if (window.innerWidth < 768) {
        setStageSize({ width: 400, height: 300 });
      } else if (window.innerWidth < 410) {
        setStageSize({ width: 350, height: 250 });
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div id="join" className="bg-yellow flex flex-col items-center py-36">
      <h2 className="text-6xl text-white">JOIN THE MILO ARMY</h2>
      <p className="mt-7">Upload your pfp and tap to edit</p>
      <div className="max-w-[800px] relative border-8 mt-14 border-white">
        <IoIosCloseCircleOutline
          size={40}
          onClick={() => setImage(undefined)}
          className="absolute hover:bg-black hover:text-white z-20 cursor-pointer  right-3 top-3"
        />
        <Stage
          //@ts-ignore
          ref={stageRef}
          width={stageSize.width}
          height={stageSize.width}
        >
          <Layer>
            <MiloImage img={image} stageSize={stageSize} />
          </Layer>
        </Stage>
      </div>
      <button
        onClick={handleSelectFile}
        className="mt-12 text-2xl uppercase bg-black px-3 py-2 rounded-md rotate-6 hover:bg-white hover:text-black text-white"
      >
        {image ? "download image" : "upload image"}
      </button>
      <input
        onChange={handleChange}
        type="file"
        //@ts-ignore
        ref={file}
        className="hidden"
      />
    </div>
  );
}
