import { GoogleLogin } from "@react-oauth/google";
import { memo } from "react";
import {jwtDecode} from "jwt-decode"
import { setUser } from "../model/authSlice";
import { useDispatch } from "react-redux";

export const LoginWrapper = memo(() => {
  const dispatch=useDispatch()
  return (
    <div>
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const payload = jwtDecode(credentialResponse.credential as string);
            dispatch(setUser(payload))
            // console.log(jwtDecode(credentialResponse.credential as string));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        ;
      </div>
    </div>
  );
});
