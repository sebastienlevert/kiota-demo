import {Msdyn_quotelinescheduleofvalue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotelinescheduleofvalue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotelinescheduleofvalue();
}
