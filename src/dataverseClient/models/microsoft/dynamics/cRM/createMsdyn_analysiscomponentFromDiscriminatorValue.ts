import {Msdyn_analysiscomponent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_analysiscomponentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_analysiscomponent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_analysiscomponent();
}
