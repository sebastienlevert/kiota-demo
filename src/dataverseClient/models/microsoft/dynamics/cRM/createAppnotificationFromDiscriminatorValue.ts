import {Appnotification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppnotificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Appnotification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Appnotification();
}
