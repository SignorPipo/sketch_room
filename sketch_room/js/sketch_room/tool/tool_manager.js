
class ToolManager {
    constructor(sceneObject) {
        this._mySceneObject = sceneObject;

        this._createTools();
    }

    getTool(type) {
        return this._myTools[type];
    }

    selectTool(type) {
        for (let tool of this._myTools) {
            if (tool) {
                tool.setEnabled(false);
            }
        }

        this._myTools[type].setEnabled(true);
        this._myTools[ToolType.SELECT].setEnabled(true);

        CurrentToolType = type;
    }

    setSelectedShape(shape) {
        for (let tool of this._myTools) {
            if (tool) {
                tool.setSelectedShape(shape);
            }
        }
    }

    start() {
        for (let tool of this._myTools) {
            if (tool) {
                tool.start();
            }
        }
    }

    update(dt) {
        for (let tool of this._myTools) {
            if (tool) {
                tool.update(dt);
            }
        }
    }

    _createTools() {
        this._myTools = [];
        this._myTools[ToolType.GRAB] = new GrabTool();
        this._myTools[ToolType.CREATE] = new CreateTool(this._mySceneObject);
        this._myTools[ToolType.SELECT] = new SelectTool();
    }
}

var ToolType = {
    NONE: 0,
    GRAB: 1,
    MOVE: 2,
    ROTATE: 3,
    SCALE: 4,
    CREATE: 5,
    SELECT: 6
};