import {Connectionrole} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionroleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Connectionrole {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Connectionrole();
}
