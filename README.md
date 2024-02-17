[![Netlify Status](https://api.netlify.com/api/v1/badges/2fd7dbe5-c224-4a8e-bf46-a08001682844/deploy-status)](https://app.netlify.com/sites/fishy-product/deploys)

# Fishy Product 🐟

[Fishy Product (hosted on Netlify)](https://fishy-product.netlify.app/) -
This project is a resource for a tutorial I made on Youtube that showcase the use of NextJS, Tailwindcss, and React to build a Server Side Rendered (SSR) marketing webpage.

## How to run

To install the project, make sure you have [Node.js](https://nodejs.org) installed. Then, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/Gullskatten/fishy-product.git
```

2. Install project dependencies:

```bash
npm install

```

3. Run the application:

```
npm run dev
```

4. Go to http://localhost:3000 to see the Fishy Product website! 🎉

## Resources

#### Creating a new next-js app

```console
npx create-next-app@latest
```

## Extras

### ffmpeg create icon from svg / png

`ffmpeg` can be installed with homebrew.

```console
ffmpeg -i img.png -vf scale=32:32 img.ico
```

## Troubleshooting

### `code .` is not recognized as a command

Open VS Code and hit <kbd>⌘</kbd> + ⇧ + <kbd>P</kbd> / <kbd>ctrl</kbd> + ⇧ + <kbd>P</kbd> and search for:

```console
>Shell Command: Install 'code' command in PATH
```

hit <kbd>Enter</kbd> key.

This will allow you to use `code .` to open up the current directory in VS code from a terminal. For users using VS Code Insiders, the command is `code-insiders .`
