export default () => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "005c016c-8c83-4a1c-a859-983887e36dfe";

  (function() {
    var d = document;
    var s = d.createElement("script");

    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
};
