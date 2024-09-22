import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Luiz Pinturas";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#f2f2f2",
          color: "#333",
          fontSize: 48,
          fontWeight: "bold",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: 60,
            color: "#0070f3",
          }}
        >
          Pintura Profissional
        </div>

        <div style={{ marginTop: 20 }}>
          Atibaia, Mairiporã, Bragança Paulista e Região
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 36,
            fontWeight: "normal",
            color: "#666",
          }}
        >
          Acabamento impecável com preços acessíveis
        </div>

        <div
          style={{
            marginTop: 50,
            fontSize: 28,
            fontStyle: "italic",
            color: "#0070f3",
          }}
        >
          Sua transformação começa aqui!
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
