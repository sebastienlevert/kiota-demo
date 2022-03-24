import {Msdyn_kbattachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_kbattachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_kbattachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_kbattachment();
}
