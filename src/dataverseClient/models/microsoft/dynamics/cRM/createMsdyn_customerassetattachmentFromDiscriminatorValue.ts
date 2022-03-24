import {Msdyn_customerassetattachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_customerassetattachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_customerassetattachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_customerassetattachment();
}
