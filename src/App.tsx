import Home from "./pages/Home";
function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-color-red flex-col">
        <div className="flex items-center justify-center">
          <Home />
        </div>
        {/* Place at the end of the page */}
        <div className="flex items-center justify-center">
          <p className="font-['Montserrat'] text-[#828282] font-[500] text-[10px] mt-[10px]">
            created by <span className="font-[700]">Caio Medeiros</span> - devChallenges.io
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
