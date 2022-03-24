import {Msdyn_analysisresult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_analysisresultFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_analysisresult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_analysisresult();
}
