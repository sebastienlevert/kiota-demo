import {Msdyn_productivityactioninputparameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productivityactioninputparameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productivityactioninputparameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productivityactioninputparameter();
}
