import {Connectionreference} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionreferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Connectionreference {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Connectionreference();
}
