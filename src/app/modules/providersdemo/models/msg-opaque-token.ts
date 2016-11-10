import { OpaqueToken } from "@angular/core";

export let MESSAGE = new OpaqueToken('message');

export class MsgOpaqueToken {
  msg: string = 'Un message pour OpaqueToken';
}