"use client";

import { useState } from "react";

export default function PredictPage() {
  const [stock, setStock] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!stock) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`http://localhost:8000/predict?stock=${stock}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📈 Prediksi Saham</h1>

      {/* INPUT */}
      <div style={{ marginBottom: "20px" }}>
        <input
          value={stock}
          onChange={(e) => setStock(e.target.value.toUpperCase())}
          placeholder="Contoh: BBCA"
          style={{
            padding: "10px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        />

        <button
          type="button"
          onClick={handlePredict}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Predict
        </button>
      </div>

      {/* LOADING */}
      {loading && <p>⏳ Sedang memproses...</p>}

      {/* RESULT */}
      {result && !result.error && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{result.stock}</h2>

          <p>
            Prediksi:{" "}
            <strong
              style={{
                color: result.prediction === "Naik" ? "green" : "red",
              }}
            >
              {result.prediction}
            </strong>
          </p>

          <p>Confidence: {(result.confidence * 100).toFixed(0)}%</p>

          <div style={{ marginTop: "10px" }}>
            <p>Probabilitas:</p>

            <div
              style={{
                background: "#eee",
                borderRadius: "5px",
                overflow: "hidden",
                height: "10px",
              }}
            >
              <div
                style={{
                  width: `${result.prob_naik * 100}%`,
                  background: "green",
                  height: "10px",
                }}
              ></div>
            </div>

            <small>Naik {(result.prob_naik * 100).toFixed(0)}%</small>
          </div>
        </div>
      )}

      {/* ERROR */}
      {result && result.error && (
        <p style={{ color: "red" }}>❌ {result.error}</p>
      )}
    </div>
  );
}