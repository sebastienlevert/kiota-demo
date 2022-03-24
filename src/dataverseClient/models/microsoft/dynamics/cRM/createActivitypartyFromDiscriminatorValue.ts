import {Activityparty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivitypartyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Activityparty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Activityparty();
}
