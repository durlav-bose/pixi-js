
import * as PIXI from 'pixi.js';
import 'pixi.js/advanced-blend-modes';

const allBlendModes = [
    'normal',
        'add',
        'screen',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'linear-burn',
        'linear-dodge',
        'linear-light',
        'hard-light',
        'soft-light',
        'pin-light',
        'difference',
        'exclusion',
        'overlay',
        'saturation',
        'color',
        'luminosity',
        'add-npm',
        'subtract',
        'divide',
        'vivid-light',
        'hard-mix',
        'negation',
];

const app = new PIXI.Application();

await app.init({ width: 1000, height: 1000, antialias: true, backgroundColor: 'white', useBackBuffer: true });

// Append the canvas to the document body
document.body.appendChild(app.canvas);

async function loadTextures() {
    // Define the image paths
    const imagePaths = [
        './images/Left/Background (2).png',
        './images/Left/Color red.png',
        './images/Left/Print Mask (1).png',
        './images/Left/design.png',
    ];

    // Load all textures
    const textures = await Promise.all(imagePaths.map(path => PIXI.Assets.load(path)));
    return textures;
}

async function createStackedImages() {
    const textures = await loadTextures();

    // Load the background image
    const backgroundTexture = textures[0];
    const backgroundSprite = new PIXI.Sprite(backgroundTexture);
    app.stage.addChild(backgroundSprite);

    const colorTexture = textures[1];
    const colorSprite = new PIXI.Sprite(colorTexture);
    

    // Load the mask image
    const maskTexture = textures[2];
    const maskSprite = new PIXI.Sprite(maskTexture);

    maskSprite.alpha = 0;

    // Load the design image
    const designTexture = textures[3];
    const designSprite = new PIXI.Sprite(designTexture);

    designSprite.x = 0;
    designSprite.y = 100;

    designSprite.alpha = 1;
    designSprite.anchor = 0;


    // Apply the mask to the design sprite
    designSprite.mask = maskSprite;

    // Position the mask sprite
    maskSprite.x = 0;
    maskSprite.y = 0;

    app.stage.addChild(colorSprite);
    app.stage.addChild(maskSprite);
    app.stage.addChild(designSprite);

    // Create a container to hold the design and mask sprites
    const container = new PIXI.Container();
    container.addChild(maskSprite);
    container.addChild(designSprite);

    // // Position the container on top of the background
    // container.x = backgroundSprite.x;
    // container.y = backgroundSprite.y;

    // // Add the container to the stage
    app.stage.addChild(container);

    // Create and configure the button
    const button = document.createElement('button');
    button.innerText = 'Change Blend Mode';
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.left = '10px';
    document.body.appendChild(button);

    // Create a text element to display the current blend mode
    const blendModeText = new PIXI.Text('Blend Mode: NORMAL', { fontSize: 24, fill: '#000' });
    blendModeText.x = 10;
    blendModeText.y = 50;
    app.stage.addChild(blendModeText);

    // Handle button click
    button.addEventListener('click', () => {
        // Select a random blend mode
        const randomBlendModeName = allBlendModes[Math.floor(Math.random() * allBlendModes.length)];

        console.log('randomBlendModeName :>> ', randomBlendModeName);

        // Apply the blend mode to the design sprite
        designSprite.blendMode = randomBlendModeName;


        // Update the text element to display the current blend mode
        blendModeText.text = `Blend Mode: ${randomBlendModeName}`;
    });

    const opacitySlider = document.getElementById('opacity-slider');
    opacitySlider.addEventListener('input', (event) => {
        designSprite.alpha = event.target.value;

        console.log('designSprite.alpha :>> ', designSprite.alpha);
    });
}

createStackedImages();


