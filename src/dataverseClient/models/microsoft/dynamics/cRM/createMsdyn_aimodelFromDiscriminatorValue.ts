import {Msdyn_aimodel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aimodelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aimodel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aimodel();
}
