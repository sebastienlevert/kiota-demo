import {Msdyn_ocsitrainingdata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsitrainingdataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsitrainingdata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsitrainingdata();
}
