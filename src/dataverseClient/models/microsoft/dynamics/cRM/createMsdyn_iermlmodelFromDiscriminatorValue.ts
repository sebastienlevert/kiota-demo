import {Msdyn_iermlmodel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iermlmodelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iermlmodel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iermlmodel();
}
