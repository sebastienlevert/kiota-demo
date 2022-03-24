import {Connection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Connection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Connection();
}
