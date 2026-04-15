import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{ height: "200vh", paddingTop: "100px", paddingLeft: "2rem" }}>
        <p style={{ color: "white" }}>Navbar funcionando ✅</p>
      </div>
    </main>
  );
}