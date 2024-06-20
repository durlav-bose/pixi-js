// // const app = new PIXI.Application();
// // await app.init({ width: 1000, height: 1000 });

// // document.body.appendChild(app.canvas);

// // // load the texture we need
// // const texture = await PIXI.Assets.load('./images/Left/Background (2).png');

// // // This creates a texture from a 'bunny.png' image
// // const bunny = new PIXI.Sprite(texture);

// // // Setup the position of the bunny
// // bunny.x = app.renderer.width / 2;
// // bunny.y = app.renderer.height / 2;

// // // Rotate around the center
// // bunny.anchor.x = 0.5;
// // bunny.anchor.y = 0.5;

// // // Add the bunny to the scene we are building
// // app.stage.addChild(bunny);

// // // Listen for frame updates
// // app.ticker.add(() => {
// //     // each frame we spin the bunny around a bit
// //     // bunny.rotation += 0.01;
// // });

// // Define all blend modes
// const allBlendModes = [
//   'NORMAL',
//   'ADD',
//   'SCREEN',
//   'DARKEN',
//   'LIGHTEN',
//   'COLOR_DODGE',
//   'COLOR_BURN',
//   'LINEAR_BURN',
//   'LINEAR_DODGE',
//   'LINEAR_LIGHT',
//   'HARD_LIGHT',
//   'SOFT_LIGHT',
//   'PIN_LIGHT',
//   'DIFFERENCE',
//   'EXCLUSION',
//   'OVERLAY',
//   'SATURATION',
//   'COLOR',
//   'LUMINOSITY',
//   'ADD_NPM',
//   'SUBTRACT',
//   'DIVIDE',
//   'VIVID_LIGHT',
//   'HARD_MIX',
//   'NEGATION'
// ];

// // Create a new PixiJS application
// const app = new PIXI.Application();
// await app.init({ width: 1000, height: 1000, antialias: true,
//   backgroundColor: 'white' });

// // Append the canvas to the document body
// document.body.appendChild(app.canvas);

// async function loadTextures() {
//     // Define the image paths
//     const imagePaths = [
//       './images/Left/Background (2).png',
//       './images/Left/Print Mask (1).png',
//       './images/Left/design.png',
//           // './images/Left/Design Shadow (1).png',
      
//     ];

//     // Load all textures
//     const textures = await Promise.all(imagePaths.map(path => PIXI.Assets.load(path)));

//     return textures;
// }

// async function createStackedImages() {
//   const textures = await loadTextures();

//   // Load the background image
//   const backgroundTexture = textures[0];
//   const backgroundSprite = new PIXI.Sprite(backgroundTexture);
//   app.stage.addChild(backgroundSprite);

//   // Load the mask image
//   const maskTexture = textures[1];
//   const maskSprite = new PIXI.Sprite(maskTexture);

//   // Load the design image
//   const designTexture = textures[2];
//   const designSprite = new PIXI.Sprite(designTexture);

//   designSprite.x = 0;
//   designSprite.y = 100;

//   // Apply the mask to the design sprite
//   designSprite.mask = maskSprite;

//   // Position the mask sprite
//   maskSprite.x = 0;
//   maskSprite.y = 0;

//   // Create a container to hold the design and mask sprites
//   const container = new PIXI.Container();
//   container.addChild(maskSprite);
//   container.addChild(designSprite);

//   // Position the container on top of the background
//   container.x = backgroundSprite.x;
//   container.y = backgroundSprite.y;

//   // Add the container to the stage
//   app.stage.addChild(container);

//   // Create and configure the button
//   const button = document.createElement('button');
//   button.innerText = 'Change Blend Mode';
//   button.style.position = 'absolute';
//   button.style.top = '10px';
//   button.style.left = '10px';
//   document.body.appendChild(button);

  

//   // Create a text element to display the current blend mode
//   const blendModeText = new PIXI.Text('Blend Mode: NORMAL', { fontSize: 24, fill: '#000' });
//   blendModeText.x = 10;
//   blendModeText.y = 50;
//   app.stage.addChild(blendModeText);

//   // Handle button click
//   button.addEventListener('click', () => {
//       // Select a random blend mode
//       const randomBlendModeName = allBlendModes[Math.floor(Math.random() * allBlendModes.length)];
//       const randomBlendMode = randomBlendModeName;

//       // Apply the blend mode to the design sprite
//       designSprite.blendMode = randomBlendMode;

//       // Update the text element to display the current blend mode
//       blendModeText.text = `Blend Mode: ${randomBlendModeName}`;
//   });
// }

// // async function createStackedImages() {
// //   const textures = await loadTextures();

// //   // Load the background image
// //   const backgroundTexture = textures[0];
// //   const backgroundSprite = new PIXI.Sprite({
// //     texture: backgroundTexture,
// //     blendMode: 'difference',
// //   });
// //   app.stage.addChild(backgroundSprite);

// //   // Load the mask image
// //   // const maskTexture = textures[1];
// //   // const maskSprite = new PIXI.Sprite({
// //   //   texture: maskTexture,
// //   //   blendMode: 'linear-burn',
// //   // });

// //   // // Load the design image
// //   // const designTexture = textures[2];
// //   // const designSprite = new PIXI.Sprite({
// //   //   texture: designTexture,
// //   //   blendMode: 'linear-burn',
// //   // });

// //   // // designSprite.blendMode = "color-dodge";

// //   // designSprite.x = 0;
// //   // designSprite.y = 100;

// //   // // Apply the mask to the design sprite
// //   // designSprite.mask = maskSprite;

// //   // // Position the mask sprite
// //   // maskSprite.x = 0;
// //   // maskSprite.y = 0;

// //   // // Create a container to hold the design and mask sprites
// //   // const container = new PIXI.Container();
// //   // container.addChild(maskSprite);
// //   // container.addChild(designSprite);

// //   // // Position the container on top of the background
// //   // container.x = backgroundSprite.x;
// //   // container.y = backgroundSprite.y;

// //   // // Add the container to the stage
// //   // app.stage.addChild(container);

// //    // Make the container interactive and draggable
// //   //  container.interactive = true;
// //   //  container.buttonMode = true;

// //   //  container
// //   //      .on('pointerdown', onDragStart)
// //   //      .on('pointerup', onDragEnd)
// //   //      .on('pointerupoutside', onDragEnd)
// //   //      .on('pointermove', onDragMove);

// //   //  function onDragStart(event) {
// //   //      this.data = event.data;
// //   //      this.dragging = true;
// //   //      console.log('this.x :>> ', this.x);
// //   //      console.log('event.data.global.x :>> ', event.data.global.x);
// //   //      this.dragStartX = this.x - event.data.global.x;
// //   //      this.dragStartY = this.y - event.data.global.y;
// //   //      this.alpha = 0.5; // Optional: change alpha to indicate dragging
// //   //  }

// //   //  function onDragEnd() {
// //   //      this.alpha = 1; // Optional: reset alpha
// //   //      this.dragging = false;
// //   //      this.data = null;
// //   //  }

// //   //  function onDragMove() {
// //   //      if (this.dragging) {
// //   //          const newPosition = this.data.global;
// //   //          console.log('newPosition :>> ', newPosition);
// //   //          this.x = newPosition.x + this.dragStartX;
// //   //          this.y = newPosition.y + this.dragStartY;
// //   //      }
// //   //  }

// //   console.log('PIXI :>> ', PIXI);

  

// //   // Make the design sprite interactive and draggable
// //   // designSprite.interactive = true;
// //   // designSprite.buttonMode = true;

// //   // designSprite
// //   //     .on('pointerdown', onDragStart)
// //   //     .on('pointerup', onDragEnd)
// //   //     .on('pointerupoutside', onDragEnd)
// //   //     .on('pointermove', onDragMove);

// //   // function onDragStart(event) {
// //   //     this.data = event.data;
// //   //     this.dragging = true;
// //   //     console.log('this.x :>> ', this.x);
// //   //     console.log('event.data.global.x :>> ', event.data.global.x);
// //   //     this.dragStartX = this.x - event.data.global.x;
// //   //     this.dragStartY = this.y - event.data.global.y;
// //   //     this.alpha = 1; // Optional: change alpha to indicate dragging
// //   // }

// //   // function onDragEnd() {
// //   //     this.alpha = 1; // Optional: reset alpha
// //   //     this.dragging = false;
// //   //     this.data = null;
// //   // }

// //   // function onDragMove() {
// //   //     if (this.dragging) {
// //   //         const newPosition = this.data.global;
// //   //         this.x = newPosition.x + this.dragStartX;
// //   //         this.y = newPosition.y + this.dragStartY;
// //   //     }
// //   // }
// // }

// createStackedImages();
