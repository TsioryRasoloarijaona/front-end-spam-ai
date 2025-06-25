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
import InboxViewSent from "./pages/layouts/sent/InboxView";
import InboxViewSpam from "./pages/layouts/spam/InboxView";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Creation from "./pages/Creation";
import { WebSocketProvider } from "./hooks/webSocketContext";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <>
      <WebSocketProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/info" element={<Info />} />
          <Route path="/signUp/:id" element={<SignUp />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dash" element={<Layout />}>
              <Route path="inbox" element={<LayoutIbox />}>
                <Route index path=":id" element={<InboxView />} />
              </Route>
              <Route path="sent" element={<LayoutSent />}>
                <Route index path=":id" element={<InboxViewSent />} />
              </Route>
              <Route path="spam" element={<LayoutSpam />}>
                <Route index path=":id" element={<InboxViewSpam />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </WebSocketProvider>
    </>
  );
}

export default App;
