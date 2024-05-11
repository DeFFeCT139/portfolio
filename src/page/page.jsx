import { Navigate, Route, Routes } from "react-router-dom";
import { privatRouts, openRouts } from "../router/routs";
import { useSelector } from "react-redux";
import LeftPanelModule from "../module/LeftPanelModule/LeftPanelModule";
import { Suspense } from "react";
import Error404 from "./error/error404/error";

const Page = () => {

    const auth = useSelector((state) => state.auth.info)

    return (
      <div className="Page">
        {auth?
            <div className="">
              <LeftPanelModule/>
              <Suspense>
                <Routes>
                  {privatRouts.map(item => 
                      <Route key={privatRouts.indexOf(item)} path={item.path} element={item.comment}/>
                  )}
                  <Route path="*" element={<Error404 state={true}/>}/>
                </Routes>
              </Suspense>
            </div>:
            <Routes>
              {openRouts.map(item => 
                  <Route key={openRouts.indexOf(item)} path={item.path} element={item.comment}/>
              )}
              <Route path="/*" element={<Error404 state={false}/>}/>
            </Routes>
        }
      </div>
    );
  };
  
export default Page;