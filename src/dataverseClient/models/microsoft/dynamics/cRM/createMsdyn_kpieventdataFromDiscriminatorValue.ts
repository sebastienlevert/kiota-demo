import {Msdyn_kpieventdata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_kpieventdataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_kpieventdata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_kpieventdata();
}
