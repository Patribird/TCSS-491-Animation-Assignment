const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./castlevaniasprite.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnable = false;

	gameEngine.addEntity(new Castlevania(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
