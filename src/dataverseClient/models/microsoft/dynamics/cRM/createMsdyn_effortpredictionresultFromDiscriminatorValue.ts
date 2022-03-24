import {Msdyn_effortpredictionresult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_effortpredictionresultFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_effortpredictionresult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_effortpredictionresult();
}
