import { Close } from "@mui/icons-material"; // Importing a close icon from MUI
import KnowledgeTransfer from "./../KnowledgeTransfer/KnowledgeTransfer";
import SmartCheckList from "../SmartCheckList/SmartCheckList";

function SideMenu({ isOpen, toggleSideNav, navbarIconValue }) {
  console.log("SideMenu isOpen:", isOpen);
  console.log("SideMenu navbarIconValue:", navbarIconValue);

  if (navbarIconValue === "Cart") {
    return (
      <div
        className={`fixed top-0 right-0 h-[100vh]  bg-white  text-black  transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-1/4 shadow-lg flex flex-col`}
      >
        {/* Close Button - Positioned on the Left */}
        <div className="flex justify-start p-4">
          <button
            onClick={toggleSideNav}
            className="text-black hover:text-gray-400"
          >
            <Close />
          </button>
        </div>

        <section className="px-3">
          <header className="flex justify-between border-1 border-slate-100 py-4">
            <h4> Your Run Cart </h4>
            <p> requests in run kitchen </p>
          </header>
          <div className="flex justify-between">
            <p> Product </p>
            <div className="flex gap-1">
              <p>Qty. </p>
              <p>Remove </p>
            </div>
          </div>
          <SmartCheckList />
          <br />
          <SmartCheckList />
          <br />

          <SmartCheckList />
          <br />

          <div className="flex justify-between">
            <p> New Payment </p>
            <p> No,Inclusice in your package </p>
          </div>
          <br />

          <div className="flex justify-between">
            <p> Total units Consumed </p>
            <p> 100.00 DTSUs </p>
          </div>
          <br />

          <div>
            <button
              type="button"
              className="rounded-xl mx-auto bg-blue-500 w-full py-2 text-white  mb-3"
            >
              Checkout
            </button>

            <button
              className="rounded-xl mx-auto bg-white border-1 border-blue-600 text-black w-full py-2 "
              type="button"
            >
              Back to Run Information
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div
      className={`fixed top-0 right-0 h-[100vh] bg-white  text-black transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } w-1/4 shadow-lg flex flex-col`}
    >
      {/* Close Button - Positioned on the Left */}
      <div className="flex justify-start p-4">
        <button
          onClick={toggleSideNav}
          className="text-black hover:text-gray-400"
        >
          <Close />
        </button>
      </div>

      <section className="px-3">
        <header className="flex justify-between border-1 border-slate-100 py-4">
          <h4> Your Run Kitchen </h4>
          <p> requests in run kitchen </p>
        </header>
        <div className="flex justify-between">
          <p> request </p> <p>Status O/P Link </p>
        </div>
        <KnowledgeTransfer />
        <br />
        <KnowledgeTransfer />
        <br />

        <KnowledgeTransfer />
        <br />

        <div className="flex justify-between">
          <p> Units under processing </p>
          <p> 12.00 DTSUs </p>
        </div>
        <br />

        <div className="flex justify-between">
          <p> Units Completed </p>
          <p> 12.00 DTSUs </p>
        </div>
        <br />
        <div className="flex justify-between">
          <p> Total Units Consumed </p>
          <p> 12.00 DTSUs </p>
        </div>
        <div>
          <button
            type="button"
            className="rounded-xl mx-auto bg-blue-500 w-full py-2 text-white  mb-3"
          >
            Refresh Status
          </button>

          <button
            className="rounded-xl mx-auto bg-white border-1 border-blue-600 text-black w-full py-2 "
            type="button"
          >
            {" "}
            back to Your Dashboard{" "}
          </button>
        </div>
      </section>
    </div>
  );
}

export default SideMenu;
