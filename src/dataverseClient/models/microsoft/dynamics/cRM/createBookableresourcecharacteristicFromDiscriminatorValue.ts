import {Bookableresourcecharacteristic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookableresourcecharacteristicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bookableresourcecharacteristic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bookableresourcecharacteristic();
}
