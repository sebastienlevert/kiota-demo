import {Bulkoperationlog} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBulkoperationlogFromDiscriminatorValue(parseNode: ParseNode | undefined) : Bulkoperationlog {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Bulkoperationlog();
}
