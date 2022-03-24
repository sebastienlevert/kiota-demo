import {Bulkoperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBulkoperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bulkoperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bulkoperation();
}
