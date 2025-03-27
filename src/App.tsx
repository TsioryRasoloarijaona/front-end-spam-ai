import "./App.css";
import { Route, Routes } from "react-router";
import SignUp from "../src/pages/SignUp";
import Phone from "./pages/Phone";
import Info from "./pages/Info";
import Layout from "./pages/layouts/Layout";
import LayoutIbox from "./pages/layouts/Inbox/Layout";
import LayoutSent from "./pages/layouts/sent/Layout";
import LayoutSpam from "./pages/layouts/spam/Layout";
import InboxView from "./pages/layouts/Inbox/InboxView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/dash" element={<Layout />}>
          <Route path="inbox" element={<LayoutIbox />}>
            <Route index path=":id" element={<InboxView />} />
          </Route>
          <Route path="sent" element={< LayoutSent/>} />
          <Route path="spam" element={< LayoutSpam/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
