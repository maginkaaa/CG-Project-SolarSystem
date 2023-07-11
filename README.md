# Computer Graphics Project

This project was developed as part of a Computer Graphics course using the Three.js framework.

## Description

The project is a solar system simulation where the planets orbit around the sun. Each planet is represented by a sphere with a texture mapped onto it. The planets rotate around their own axes while also orbiting around the sun.

## Features

- Interactive 3D Solar System: The project utilizes the Three.js framework to create an interactive 3D representation of the solar system. Users can explore and navigate the virtual space to observe the planets and their orbits around the sun.
- Realistic Planet Textures: Each planet in the solar system is rendered with high-resolution textures, sourced from various image references. These textures provide realistic visual representations of the planets' surfaces, enhancing the overall fidelity of the simulation.
- Planetary Orbits and Rotation: The planets in the solar system exhibit accurate orbital movements around the sun, simulating their real-world trajectories and speeds. Additionally, the planets rotate around their axes, mimicking their self-rotation behaviors.
- Lighting and Shadows: The scene includes directional lighting, which casts shadows to create a sense of depth and realism. This lighting setup enhances the visual appearance of the planets and adds an immersive dimension to the overall experience.
- User Controls and Interaction: The application features interactive controls, powered by the OrbitControls module, allowing users to freely navigate the 3D space. Users can zoom in/out, rotate the camera, and explore different angles and perspectives to observe the solar system from various viewpoints.
- Imported 3D Models: The project incorporates additional 3D models, such as the stars in the background, imported using the GLTFLoader. These models enrich the visual environment and contribute to the overall ambiance of the solar system simulation.

## Technologies Used

- JavaScript
- Three.js

## Deployed webpage
  
https://maginkaaa.github.io/CG-Project-SolarSystem/

In my project, I have three branches:

1. `main`: This is the main branch of my project. It contains the project's code in its original state. In this branch, the asset paths are referenced as `/assets/photo.jpg`. It is meant for local development and testing. To run the project locally, you can use the command `npm install` followed by `npm run` or the appropriate command to start the development server.

2. `pre_publish`: I created this branch as a pre-publish step. In this branch, I made modifications to the asset paths, changing them from `/assets/photo.jpg` to `./assets/photo.jpg`. This adjustment ensures that the assets are properly found when deployed. The purpose of this branch is to prepare the project for deployment on GitHub Pages.

3. `gh-pages`: I specifically created this branch for deploying my project to GitHub Pages. It includes only the `index.html` file and the `assets` folder.

It's worth mentioning that the last two links in the credits section provide additional resources and guides that explain the process of deploying a Three.js application.

## Installation

1. Clone the repository:

```
git clone https://github.com/maginkaaa/CG-Project-SolarSystem.git
```

2. Open the project directory:

```
cd CG-Project-SolarSystem
```

3. Install the dependencies:

```
npm install
```

4. Run the development server:

```
npm run
```


## Credits

- [Three.js](https://threejs.org/) - The JavaScript 3D library used for rendering.
- [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) - The Three.js module used for loading GLTF 3D models.
- [Creating a Scene - Three.js Documentation](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene)
- [Loading 3D Models - Three.js Documentation](https://threejs.org/docs/#manual/en/introduction/Loading-3D-models)
- [SphereGeometry - Three.js Documentation](https://threejs.org/docs/?q=geom#api/en/geometries/SphereGeometry)
- [Extracted Minecraft Java Edition Stars - Sketchfab](https://sketchfab.com/3d-models/extracted-minecraft-java-editions-stars-c8868b7ffc4a473eb5cd9203a59e3650)
- [Neptune Texture - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_2k_neptune.jpg)
- [Uranus Texture - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/9/95/Solarsystemscope_texture_2k_uranus.jpg)
- [Saturn Texture - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_8k_saturn.jpg)
- [Venus Texture - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/1/1c/Solarsystemscope_texture_8k_venus_surface.jpg)
- [Earth Texture - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/0/04/Solarsystemscope_texture_8k_earth_daymap.jpg)
- [Mercury Texture - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/2/27/Solarsystemscope_texture_8k_mercury.jpg)
- [Jupiter Texture - Planetary Science Institute](https://planetary.s3.amazonaws.com/web/assets/pictures/20181107_hlsp_opal_hst_wfc3-uvis_jupiter-2017a_color_globalmap2.jpg)
- [Saturn Texture - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_8k_saturn.jpg)
- [Uranus Texture - Free-Photos on Pixabay](https://t4.ftcdn.net/jpg/03/38/48/79/360_F_338487951_noDUtHlzxljulqg525A9YZAup9IEpeNS.jpg)
- [Sun Texture - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/c/cb/Solarsystemscope_texture_2k_sun.jpg)
- [YouTube Video - Three.js Crash Course For Beginners](https://www.youtube.com/watch?v=_OwJV2xL8M8)
- [YouTube Video - Three.js Solar System](https://www.youtube.com/watch?v=KOSMzSyiEiA)
- [Publishing A Three.js Project On GitHub Pages](https://hackernoon.com/publishing-a-threejs-project-on-github-pages-1d1a33dn)
- [Host your Three.js project on GitHub Pages](https://blog.anirudhpanda.in/publish-threejs-project-on-github-pages)
