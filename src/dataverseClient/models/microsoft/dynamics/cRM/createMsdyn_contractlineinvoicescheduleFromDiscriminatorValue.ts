import {Msdyn_contractlineinvoiceschedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_contractlineinvoiceschedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_contractlineinvoiceschedule();
}
