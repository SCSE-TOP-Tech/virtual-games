import Image from "next/image";

export default function Loading() {
  return (
    <div style={{ width: "40vw", marginTop: "50vw" }}>
      <Image
        width="800"
        height="800"
        src="https://res.cloudinary.com/dbkuv7xiw/image/upload/v1691219437/virtual_games/Loading_icon_nqd5es.gif"
        alt="loading"
      />
      <div
        style={{
          fontSize: 32,
          fontWeight: 600,
          paddingTop: "10vw",
          width: "100vw",
        }}
      >
        Loading...
      </div>
    </div>
  );
}
