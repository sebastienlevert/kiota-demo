import {Msdyn_journalline} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_journallineFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_journalline {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_journalline();
}
