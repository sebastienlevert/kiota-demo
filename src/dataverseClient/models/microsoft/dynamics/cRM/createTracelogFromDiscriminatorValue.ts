import {Tracelog} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTracelogFromDiscriminatorValue(parseNode: ParseNode | undefined) : Tracelog {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Tracelog();
}
