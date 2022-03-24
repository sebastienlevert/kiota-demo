import {Msdyn_oclinechannelconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_oclinechannelconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_oclinechannelconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_oclinechannelconfig();
}
