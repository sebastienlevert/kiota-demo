import {Msdyn_3dmodel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_3dmodelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_3dmodel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_3dmodel();
}
