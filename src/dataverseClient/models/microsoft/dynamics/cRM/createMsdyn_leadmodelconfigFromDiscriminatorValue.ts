import {Msdyn_leadmodelconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_leadmodelconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_leadmodelconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_leadmodelconfig();
}
