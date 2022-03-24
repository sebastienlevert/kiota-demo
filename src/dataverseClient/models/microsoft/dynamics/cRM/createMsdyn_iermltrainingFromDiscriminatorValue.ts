import {Msdyn_iermltraining} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iermltrainingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iermltraining {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iermltraining();
}
