const icons = require('react-feather');
const fs = require('fs');
const os = require('os');

const contents = Object.keys(icons)
  .map(
    icon => `module ${icon} = {
  [@bs.module "react-feather/dist/${icon}"] external reactClass : ReasonReact.reactClass = "default";
  let make = (children) =>
    ReasonReact.wrapJsForReason(~reactClass, ~props=Js.Obj.empty(), children);
};`,
  )
  .join(`${os.EOL}${os.EOL}`);

fs.writeFileSync('./src/FeatherIcons.re', contents);
