# Public Assets

Place all static assets (images, favicons, fonts, etc.) in this `public` folder.

## Hero images

The home page hero section is configured to load images from:

- `/images/hero-1.jpg`
- `/images/hero-2.jpg`
- `/images/hero-3.jpg`
- `/images/hero-4.jpg`

To use your own photography:

1. Create a folder called `images` inside this `public` directory.
2. Drop your four hero images into `public/images` and name them:
   - `hero-1.jpg`
   - `hero-2.jpg`
   - `hero-3.jpg`
   - `hero-4.jpg`
3. Restart `npm run dev` if it is already running.

You can add more assets as needed and reference them anywhere in the app using
paths that start with `/`, for example: `<Image src="/images/your-image.jpg" />`
or `background-image: url("/images/your-image.jpg");`.


