// Components >>
import HeadNav from "./components/defaults/HeadNav";
import SideNav from "./components/defaults/SideNav";
import Content from "./components/defaults/Content";
import FooterMsg from "./components/defaults/FooterMsg";

const App = () => {
  return (
    <main className="relative w-[calc(100%-256px)] min-h-screen">
      <SideNav />
      <HeadNav />
      <div className="min-h-screen px-12 py-6 text-right">
        <Content />
      </div>
      <FooterMsg />
    </main>
  );
};

export default App;
