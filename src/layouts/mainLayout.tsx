import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>Main Header</header>
      <main>
        <Outlet /> {/* Nested routes will be rendered here */}
      </main>
      <footer>Main Footer</footer>
    </div>
  );
};

export default MainLayout;
