import {Activitymimeattachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivitymimeattachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Activitymimeattachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Activitymimeattachment();
}
