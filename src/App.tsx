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
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Creation from "./pages/Creation";
import { WebSocketProvider } from "./pages/layouts/Inbox/webSocketContext";
function App() {
  return (
    <>
      <WebSocketProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/info" element={<Info />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dash" element={<Layout />}>
            <Route path="inbox" element={<LayoutIbox />}>
              <Route index path=":id" element={<InboxView />} />
            </Route>
            <Route path="sent" element={<LayoutSent />} />
            <Route path="spam" element={<LayoutSpam />} />
          </Route>
        </Routes>
      </WebSocketProvider>
    </>
  );
}

export default App;
