import {Msdyn_entityconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_entityconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_entityconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_entityconfig();
}
