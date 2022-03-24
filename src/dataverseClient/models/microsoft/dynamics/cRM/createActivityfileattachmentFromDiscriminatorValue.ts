import {Activityfileattachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityfileattachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Activityfileattachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Activityfileattachment();
}
