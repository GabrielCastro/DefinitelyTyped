import { ConnectionStatus, DuplexConnection, Frame, ISubject, ISubscriber, ISubscription, CONNECTION_STATUS } from 'rsocket-types';

import { Flowable } from 'rsocket-flowable';
import {
  deserializeFrame,
  deserializeFrameWithLength,
  Encoders,
  printFrame,
  serializeFrame,
  serializeFrameWithLength,
  toBuffer,
} from 'rsocket-core';
import * as ws from 'ws';

export interface ClientOptions {
    url: string;
    wsCreator?: (url: string) => WebSocket;
    debug?: boolean;
    lengthPrefixedFrames?: boolean;
}

/**
 * A WebSocket transport client for use in browser environments.
 */
export default class RSocketWebSocketClient implements DuplexConnection {
                   constructor(options: ClientOptions, encoders?: Encoders<any>);
                   close(): void;
                   connect(): void;
                   connectionStatus(): Flowable<ConnectionStatus>;
                   receive(): Flowable<Frame>;
                   sendOne(frame: Frame): void;
                   send(frames: Flowable<Frame>): void;
               }
