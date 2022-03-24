import {Environmentvariablevalue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnvironmentvariablevalueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Environmentvariablevalue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Environmentvariablevalue();
}
