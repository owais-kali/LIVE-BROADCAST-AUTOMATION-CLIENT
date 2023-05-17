// import { PCOB_Handler } from "@PCOB/PCOB-Handler";
// import { Elimination as Elimination_Callback } from "@Vmix/Callbacks/Elimination"

export class VMix_Handler {
  url;
  ActiveGTs;

  constructor(vmix_url) {
    this.url = vmix_url;
  }

  // SetCallbacks(PCOB_Handler: PCOB_Handler) {
  //   PCOB_Handler.OnEliminated = Elimination_Callback.bind(this);
  // }
}
