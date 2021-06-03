class HowToWidgetSetup extends SketchWidgetSetup {

    constructor() {
        super();

        this._initializeBuildSetup();
        this._initializeRuntimeSetup();
    }

    _initializeBuildSetup() {
        super._initializeBuildSetup();

        this.myPivotObjectPosition = [0, 0.225, 0];

        this.myMainPanelPosition = [0, 0, 0];
        this.myMainPanelBackgroundScale = [0.2, 0.150, 1];

        let panelZ = 0.01;

        this.myHowToLabelTextPosition = [0, this.myMainPanelBackgroundScale[1] - 0.025, panelZ];
        this.myHowToLabelTextScale = [0.19, 0.19, 0.19];
        this.myHowToLabelText = "How To";

        this.myHowToTextPanelPosition = [-this.myMainPanelBackgroundScale[0] + 0.015, this.myMainPanelBackgroundScale[1] - 0.065, panelZ];

        this.myHowToTextPosition = [0, 0, 0];
        this.myHowToTextScale = [0.1, 0.1, 0.1];
        this.myHowToText = `How to choose a tool
    Every direction of the right thumbstick is linked to a transform tool
    You can also click the thumbstick for the create tool

How to use create tool
    Press grip button to create a shape
    Long press the grip button to delete the selected shape
    Press both grip buttons to clone the current shape

How to use the transform tools
    Press the grip button to use the tool
    Press the top button to switch axis lock mode
    You can cancel the current action by pressing the other grip button

You can change the values on the UI by using the right thumbstick
`;

        this.myPointerCursorTargetPosition = [0, 0, panelZ - 0.0001];
        this.myPointerCollisionExtents = [this.myMainPanelBackgroundScale[0], this.myMainPanelBackgroundScale[1], this.myCursorTargetCollisionThickness];
    }

    _initializeRuntimeSetup() {
        super._initializeRuntimeSetup();
    }
}