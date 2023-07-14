# Tribeverse.dev

This repository contains the source code for Tribeverse.dev, a website built with Next.js. Tribeverse.dev provides a platform for tribes to connect and share resources.

## Quick Start Guide

To get started with Tribeverse.dev, follow these steps:

1. **Install dependencies:**

   ```
   yarn install
   ```

2. **Run the development server:**

   ```
   yarn dev
   ```

   The development server will start, and you can view the website by visiting [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**

   When you're ready to deploy your changes, run the following command:

   ```
   yarn bundle
   ```

   This will generate an optimized production build in the `/dist` directory.

4. **Deploy to GitHub Pages:**

   The deployment to GitHub Pages is automatically triggered when you push changes to the `main` branch or merge a pull request into the `main` branch. The GitHub Actions workflow will build the project and deploy the contents of the `/dist` folder to the `gh-pages`. The deployed website will be accessible at [https://tribeverse.dev](https://tribeverse.dev).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for your interest in Tribeverse.dev! We hope you find it useful and enjoy contributing to the project. If you have any questions, feel free to reach out to us.
