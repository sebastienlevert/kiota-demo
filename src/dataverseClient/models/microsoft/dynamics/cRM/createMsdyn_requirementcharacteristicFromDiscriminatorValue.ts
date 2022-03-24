import {Msdyn_requirementcharacteristic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_requirementcharacteristicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_requirementcharacteristic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_requirementcharacteristic();
}
