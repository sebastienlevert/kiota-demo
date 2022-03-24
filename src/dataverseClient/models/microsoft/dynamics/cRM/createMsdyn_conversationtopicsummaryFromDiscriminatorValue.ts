import {Msdyn_conversationtopicsummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_conversationtopicsummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_conversationtopicsummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_conversationtopicsummary();
}
