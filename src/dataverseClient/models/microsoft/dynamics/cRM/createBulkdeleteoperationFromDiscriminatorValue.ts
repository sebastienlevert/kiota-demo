import {Bulkdeleteoperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBulkdeleteoperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bulkdeleteoperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bulkdeleteoperation();
}
