import {Businessunit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBusinessunitFromDiscriminatorValue(parseNode: ParseNode | undefined) : Businessunit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Businessunit();
}
