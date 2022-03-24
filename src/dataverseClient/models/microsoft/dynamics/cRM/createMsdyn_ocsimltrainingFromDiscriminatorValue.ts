import {Msdyn_ocsimltraining} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsimltrainingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsimltraining {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsimltraining();
}
