import React from "react";
import Store from "./components/Store";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <GlobalStyle />

      <Header />

      <Detail
        name="불간 짬뽕"
        address="인천 서구 청라라임로 40"
        linkSrc="https://www.google.com/search?q=%EB%B6%88%EA%B0%84%EC%A7%AC%EB%BD%95&sxsrf=ALiCzsaNgMSciMijs1LAH9RjjC0VMKDLqA:1668545188846&source=hp&ei=o_pzY6fKB9vv-Qb_7bqwCw&iflsig=AJiK0e8AAAAAY3QIsw5j-X5z41T972S6u_FFmBEKXQNI&ved=2ahUKEwju-Jaah7H7AhXW1GEKHejADlUQvS56BAgUEAE&uact=5&oq=%EB%B6%88%EA%B0%84%EC%A7%AC%EB%BD%95&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIECAAQHjIGCAAQHhAPMgYIABAFEB4yAggmMgIIJjICCCYyAggmMgIIJjoECCMQJzoLCAAQgAQQsQMQgwE6DgguEIAEELEDEIMBENQCOggILhCABBDUAjoECAAQAzoLCC4QgAQQsQMQgwE6DgguEIAEELEDEMcBEK8BOhQILhCABBCxAxCDARDHARDRAxDUAjoFCC4QgARQAFjyCGDeCWgBcAB4AYABlAGIAcsJkgEEMS4xMJgBAKABAQ&sclient=gws-wiz&tbs=lf:1,lf_ui:9&tbm=lcl&rflfq=1&num=10&rldimm=8849009132456510177&lqi=CgzrtojqsITsp6zrvZVaEyIN67aI6rCEIOynrOu9lSoCCAKSARljaGFtcG9uX25vb2RsZV9yZXN0YXVyYW50&phdesc=LOzmYv0GxoA&sa=X&rlst=f#rlfi=hd:;si:8849009132456510177,l,CgzrtojqsITsp6zrvZVaEyIN67aI6rCEIOynrOu9lSoCCAKSARljaGFtcG9uX25vb2RsZV9yZXN0YXVyYW50,y,LOzmYv0GxoA;mv:[[37.747531699999996,126.7743017],[37.5187053,126.6446112]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9"
      />
      <Store name="불간 짬뽕" imgSrc="bbong.jpg" menuSrc="bull.jpg" />
      <Detail
        name="돈워리"
        address="인천 서구 승학로 470"
        linkSrc="https://map.naver.com/v5/search/%EB%8F%88%EC%9B%8C%EB%A6%AC/place/1239312783?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&placeSearchOption=entry=pll%26fromNxList=true"
      />
      <Store name="돈워리" imgSrc="dontworry.jpg" menuSrc="losgas.jpg" />
    </div>
  );
}

export default App;
