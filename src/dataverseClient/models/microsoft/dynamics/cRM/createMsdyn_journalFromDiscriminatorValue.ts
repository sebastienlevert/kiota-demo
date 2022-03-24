import {Msdyn_journal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_journalFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_journal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_journal();
}
