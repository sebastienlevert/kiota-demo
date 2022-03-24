import {Msdyn_contractlinescheduleofvalue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_contractlinescheduleofvalue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_contractlinescheduleofvalue();
}
