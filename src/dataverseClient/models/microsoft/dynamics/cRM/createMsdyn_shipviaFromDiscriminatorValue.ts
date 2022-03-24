import {Msdyn_shipvia} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_shipviaFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_shipvia {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_shipvia();
}
