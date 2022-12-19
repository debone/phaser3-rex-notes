import ScaleMethods from '../../basesizer/ScaleMethods.js';

var DefaultExpandCallback = function (gameObject, duration) {
    ScaleMethods.popUp.call(gameObject, duration, this.expandDirection);
};

var DefaultCollapseCallback = function (gameObject, duration) {
    ScaleMethods.scaleDown.call(gameObject, duration, this.expandDirection)
}

export default {
    setTransitionDuration(duration) {
        this.childExpander
            .setTransitInTime(duration)
            .setTransitOutTime(duration);

        return this;
    },

    setExpandCallback(callback) {
        if (callback === undefined) {
            callback = DefaultExpandCallback.bind(this);
        }
        this.childExpander.setTransitInCallback(callback);
        return this;
    },

    setCollapseCallback(callback) {
        if (callback === undefined) {
            callback = DefaultCollapseCallback.bind(this);
        }
        this.childExpander.setTransitOutCallback(callback);
        return this;
    }
}