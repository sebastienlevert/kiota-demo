import {Msdyn_casetopicsummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_casetopicsummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_casetopicsummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_casetopicsummary();
}
