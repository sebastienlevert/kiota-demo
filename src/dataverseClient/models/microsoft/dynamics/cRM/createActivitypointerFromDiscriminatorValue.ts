import {Activitypointer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivitypointerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Activitypointer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Activitypointer();
}
