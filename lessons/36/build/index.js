"use strict";
class Model {
    constructor(initialState) {
        this.state = initialState;
        this.subscribers = [];
    }
    update(updatedState) {
        this.state = Object.assign(Object.assign({}, this.state), updatedState);
        this.subscribers.forEach((callback) => {
            callback(this.state);
        });
    }
    subscribe(callback) {
        const subscriber = (state) => callback(state);
        this.subscribers.push(subscriber);
        return () => {
            this.subscribers = this.subscribers.filter((item) => item !== subscriber);
        };
    }
}
const model = new Model({ siteName: "", pathname: window.location.pathname });
