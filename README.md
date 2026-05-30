# Hue Design System

React component library with an integrated design system, built on top of **styled-components**. Designed to minimize dependencies and simplify long-term project maintenance.

## Installation

```bash
npm install @ngiudi.dev/hue-design-system
```

### Required peer dependencies

```bash
npm install react react-dom styled-components
```

## Usage

Wrap your application with `ThemeProvider` and use the components directly:

```jsx
import { ThemeProvider, Button, Text, Flex } from "@ngiudi.dev/hue-design-system";

function App() {
  return (
    <ThemeProvider>
      <Flex direction="column" gap="16">
        <Text type="title">Hello world</Text>
        <Button variant="primary">Primary action</Button>
      </Flex>
    </ThemeProvider>
  );
}
```

## Spacing system

Components use a declarative spacing system with the format `"direction-value"`:

```jsx
// margin: all 16px
<Box margin="a-16" />

// padding: horizontal 8px, vertical 4px
<Box padding="x-8 y-4" />

// margin: top 24px, bottom 8px
<Box margin="t-24 b-8" />
```

## Requirements

- React 19+
- styled-components 6+
