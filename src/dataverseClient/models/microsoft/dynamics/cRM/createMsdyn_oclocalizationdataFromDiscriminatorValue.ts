import {Msdyn_oclocalizationdata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_oclocalizationdataFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_oclocalizationdata {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_oclocalizationdata();
}
