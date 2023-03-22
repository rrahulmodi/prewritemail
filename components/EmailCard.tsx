import { Box } from "@mui/material";
import React, { useState } from "react";

type Props = {};

type EmailType = {
  to: string;
  cc: string;
  bcc: string;
  subject: string;
  body: string;
};
const EmailCard = (props: Props) => {
  const [showCC, setShowCC] = useState(false);
  const [showBCC, setShowBCC] = useState(false);
  const [btnText, setBtnText] = useState("");
  const [data, setData] = useState<EmailType>({
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    body: "",
  });

  const handleCopy = () => {
    const { to, cc, bcc, subject, body } = data;
    let temp = `mailto:${to}`;
    if (showCC) temp += `cc=${cc}`;
    if (showBCC) temp += `bcc=${bcc}`;
    if (subject) temp += `subject=${subject}`;
    if (body) temp += `body=${body}`;
    navigator?.clipboard?.writeText(temp);
    setBtnText("Copied!");
  };

  const handleType =
    (type: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (btnText === "Copied!") {
        setBtnText("Copy Code");
      }
      setData((v) => ({ ...v, [type]: e.target.value }));
    };
  return (
    <>
      <Box className="flex justify-center">
        <Box className="mh2 w-90 outer-border h-100">
          <Box className="mh2 w-90   email-window h-100 flex flex-column ">
            <Box className=" ph2 ph3-ns flex justify-center items-center w-100 tc relative email-header">
              <h1 className="card-title f5-ns ma0 fw6 pv3  ph2">
                prewritemail
              </h1>
            </Box>

            <Box className="bb email-compose">
              <Box className="flex flex-row relative items-center justify-center">
                <label className="f5-ns f5 pv3  pl3 pl3-ns form-lable">
                  To:
                </label>
                <input
                  id="recipient"
                  name="recipient"
                  className="input input-reset tagify pv2 pb1 h-100 db w-100 bg-transparent b--none pl2 pl3-ns f4 fw6"
                  type="text"
                  value={data.to}
                  onChange={handleType("to")}
                />
                <Box className="mr2 mr3-ns">
                  <Box
                    className="f5-ns f7  br2 ph2 tdn tc pv2 dib btn-sm ccButton"
                    sx={{ cursor: "pointer !important" }}
                    onClick={() => setShowCC(!showCC)}
                  >
                    Cc:
                  </Box>
                </Box>
                <Box className="mr2 mr3-ns">
                  <Box
                    className="f5-ns f7  br2 ph2 tdn tc pv2 dib btn-sm bccButton"
                    sx={{ cursor: "pointer !important" }}
                    onClick={() => setShowBCC(!showBCC)}
                  >
                    Bcc:
                  </Box>
                </Box>
              </Box>
              <Box className={`bccSection ${showCC ? "" : "dn"} `}>
                <Box className="flex flex-row relative items-center justify-center">
                  <label className="f5-ns f7 pt3  code  pl2 pl3-ns">Cc:</label>
                  <input
                    id="cc"
                    name="cc"
                    className="input input-reset pt3 pb1 h-100 db w-100 bg-transparent b--none pl2 pl3-ns f4 fw6"
                    type="text"
                    value={data.cc}
                    onChange={handleType("cc")}
                  />
                </Box>
              </Box>
              <Box className={`bccSection ${showBCC ? "" : "dn"}`}>
                <Box className="flex flex-row relative items-center justify-center">
                  <label className="f5-ns f5 pt3  code pl2 pl3-ns ">Bcc:</label>
                  <input
                    id="bcc"
                    name="bcc"
                    className="input input-reset pt3 pb1 h-100 db w-100 bg-transparent b--none pl2 pl3-ns f4 fw6"
                    type="text"
                    value={data.bcc}
                    onChange={handleType("bcc")}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="bb email-compose">
              <Box className="b--black bw1 flex flex-row relative items-center justify-center">
                <label className="f5-ns f5 pv3  code pl2 pl3-ns form-lable">
                  Subject:
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="input input-reset pv2 h-100 db w-100 bg-transparent b--none pl2 pl3-ns f4  fw6"
                  type="text"
                  value={data.subject}
                  onChange={handleType("subject")}
                />
              </Box>
            </Box>

            <div className="email-body w-100 pt2 pt3-ns flex-auto ">
              <label className="f5-ns f5  pl2 pl3-ns db form-lable">
                Body:
              </label>
              <textarea
                aria-label="message"
                id="body"
                name="body"
                className="pa2 pa3-ns w-100 input input-reset bg-transparent b--none f5-ns f5 lh-copy  flex-auto fw6"
                placeholder="A simple markup generator for mailto links that takes care of the formatting for you. Just fill out the email and copy your code."
                value={data.body}
                onChange={handleType("body")}
              ></textarea>
            </div>
          </Box>
        </Box>
      </Box>
      <Box className="mh2 w-90 center before-window h-100 flex flex-column"></Box>
      <div
        className={`absolute mailto-link-container w-100 flex justify-center ph2 ${
          data.to ? "active" : ""
        }`}
      >
        <div className="output mailto-link white bg-black br-pill b b--white flex-row items-center justify-between ">
          <div className="mailto-text">
            <span className="recipientOutput">{data.to}</span>
            {showCC && (
              <>
                <span id="ccLabel" className={`label dib`}>
                  cc=
                </span>
                <span className="ccOutput">{data.cc}</span>
              </>
            )}
            {showBCC && (
              <>
                <span id="bccLabel" className={`label dib`}>
                  bcc=
                </span>
                <span className="bccOutput">{data.bcc}</span>
              </>
            )}
            <span
              id="subjectLabel"
              className={`label ${data.subject ? "dib" : ""}`}
            >
              subject=
            </span>
            <span className="subjectOutput"></span>
            <span id="bodyLabel" className={`label ${data.body ? "dib" : ""}`}>
              body=
            </span>
            <span className="bodyOutput">{data.body}</span>
          </div>
          <Box
            className="btn btn-md fw6 ml2 copyCode copy-btn "
            onClick={handleCopy}
          >
            {btnText.length > 0 ? (
              btnText
            ) : (
              <img src="./images/copy.svg" alt="" />
            )}
          </Box>
        </div>
      </div>
    </>
  );
};

export default EmailCard;
