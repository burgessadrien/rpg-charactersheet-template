export default class ContentModel {
    constructor(props) {
        this.ContentComponent = props.ContentComponent || undefined;
        this.className = props.className || "";
        this.contents = props.contents || [];
        this.horizontalSplitLevel = props.horizontalSplitLevel || 0;
        this.verticalSplitLevel = props.verticalSplitLevel || 0;
        this.key = props.key || 0;
    }
}