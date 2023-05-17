class VMix_Handler {
    constructor(vmix_url) {
        this.ActiveGTs = new Map();
        this.url = vmix_url;
    }

    SetCallbacks(PCOB_Handler) {
        PCOB_Handler.OnEliminated = Elimination_Callback.bind(this);
    }
};

exports.VMix_Handler = VMix_Handler;
