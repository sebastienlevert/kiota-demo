import {Msdyn_ocliveworkitemcharacteristic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocliveworkitemcharacteristicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocliveworkitemcharacteristic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocliveworkitemcharacteristic();
}
