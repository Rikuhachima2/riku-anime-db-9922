import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, loading }) {
  return (
    <div className="content">
      <Navbar loading={loading} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
