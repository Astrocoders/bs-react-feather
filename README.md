# Reason bindings for React Feather

Contributions are welcome!

## Installation

```
yarn add react-feather && yarn add bs-react-feather
```

Then add `bs-react-feather` to `bs-dev-dependencies` in your `bsconfig.json`:

```json
{
  ...
  "bs-dev-dependencies": ["bs-react-feather"]
}
```

## Usage

```reason
let component = ReasonReact.statelessComponent("Component");

let make = (_children) => {
  ...component,
  render: (_self) => <FeatherIcons.Home>
};
```

These bindings are based on [bs-material-ui bindings](https://github.com/InsidersByte/bs-material-ui-icons), from InsidersByte
