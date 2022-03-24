import {Msdyn_salestag} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_salestagFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_salestag {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_salestag();
}
